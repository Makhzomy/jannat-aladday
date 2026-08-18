"""Crop the shield-only mark out of a trimmed lockup PNG (drops the wordmark)."""
import sys
import numpy as np
from PIL import Image


def crop_shield(path, out_path, pad=20):
    im = Image.open(path).convert("RGBA")
    a = np.asarray(im)[..., 3]
    colsum = (a > 8).sum(axis=0)
    nonzero_cols = np.where(colsum > 0)[0]
    x0 = nonzero_cols.min()
    gap_start = None
    for x in range(x0 + 20, im.width):
        if colsum[x] == 0:
            gap_start = x
            break
    x1 = gap_start if gap_start else nonzero_cols.max()

    rowsum = (a[:, x0:x1] > 8).sum(axis=1)
    nonzero_rows = np.where(rowsum > 0)[0]
    y0, y1 = nonzero_rows.min(), nonzero_rows.max()

    x0 = max(x0 - pad, 0)
    y0 = max(y0 - pad, 0)
    x1 = min(x1 + pad, im.width)
    y1 = min(y1 + pad, im.height)

    shield = im.crop((x0, y0, x1, y1))
    shield.save(out_path)
    print(f"shield {path} -> {out_path} {shield.size}")
    return shield


if __name__ == "__main__":
    crop_shield(sys.argv[1], sys.argv[2])
