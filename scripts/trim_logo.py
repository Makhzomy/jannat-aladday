"""
Trim the light, gently-vignetted studio background off a logo lockup and
export a clean transparent PNG. Uses a border-connected flood fill (not a
flat threshold) so bright metallic highlights *inside* the shield are never
mistaken for background, then feathers + decontaminates the cut edge so
there's no white halo when the mark sits on a dark surface.

Usage: python trim_logo.py <input> <output_png> [--pad N]
"""
import sys
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage


def load_rgb(path):
    im = Image.open(path).convert("RGB")
    return np.asarray(im).astype(np.float32)


def background_mask(rgb, bg_min=220, chroma_tol=14):
    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    mn = np.minimum(np.minimum(r, g), b)
    mx = np.maximum(np.maximum(r, g), b)
    bright = mn > bg_min
    neutral = (mx - mn) < chroma_tol
    return bright & neutral


def border_connected(mask):
    labeled, n = ndimage.label(mask, structure=np.ones((3, 3)))
    if n == 0:
        return np.zeros_like(mask)
    h, w = mask.shape
    border_labels = set(labeled[0, :]) | set(labeled[-1, :]) | set(labeled[:, 0]) | set(labeled[:, -1])
    border_labels.discard(0)
    out = np.isin(labeled, list(border_labels))
    return out


def trim(path, out_path, pad=24, feather=2.0):
    rgb = load_rgb(path)
    bg = background_mask(rgb)
    bg = border_connected(bg)

    alpha = np.where(bg, 0.0, 255.0).astype(np.float32)
    alpha_img = Image.fromarray(alpha.astype(np.uint8), mode="L")
    alpha_img = alpha_img.filter(ImageFilter.GaussianBlur(feather))
    alpha = np.asarray(alpha_img).astype(np.float32)

    a = (alpha / 255.0)[..., None]
    a_safe = np.clip(a, 0.06, 1.0)
    white = np.array([255.0, 255.0, 255.0])
    decontaminated = (rgb - (1 - a_safe) * white) / a_safe
    decontaminated = np.clip(decontaminated, 0, 255)

    rgba = np.concatenate([decontaminated, alpha[..., None]], axis=-1).astype(np.uint8)
    out = Image.fromarray(rgba, mode="RGBA")

    ys, xs = np.where(alpha > 8)
    y0, y1 = max(ys.min() - pad, 0), min(ys.max() + pad, out.height)
    x0, x1 = max(xs.min() - pad, 0), min(xs.max() + pad, out.width)
    out = out.crop((x0, y0, x1, y1))
    out.save(out_path)
    print(f"trimmed {path} -> {out_path} {out.size}")
    return out


if __name__ == "__main__":
    src = sys.argv[1]
    dst = sys.argv[2]
    pad = 24
    if "--pad" in sys.argv:
        pad = int(sys.argv[sys.argv.index("--pad") + 1])
    trim(src, dst, pad=pad)
