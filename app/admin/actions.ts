"use server";

import { randomUUID } from "node:crypto";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { put, del } from "@vercel/blob";
import { createSession, destroySession, isAuthenticated, checkPassword } from "@/lib/admin-auth";
import { getItems, saveItems, type CatalogItem } from "@/lib/items";

const MAX_FILE_SIZE = 8 * 1024 * 1024;

type FormState = { error?: string; success?: boolean } | undefined;

async function requireAuth() {
  if (!(await isAuthenticated())) redirect("/admin/login");
}

function revalidatePublicPages() {
  revalidatePath("/admin");
  for (const locale of ["ar", "en"]) {
    revalidatePath(`/${locale}`);
    revalidatePath(`/${locale}/gallery`);
  }
}

export async function loginAction(_prevState: FormState, formData: FormData): Promise<FormState> {
  const password = String(formData.get("password") ?? "");
  if (!checkPassword(password)) {
    return { error: "Incorrect password." };
  }
  await createSession();
  redirect("/admin");
}

export async function logoutAction() {
  await destroySession();
  redirect("/admin/login");
}

export async function uploadItemAction(_prevState: FormState, formData: FormData): Promise<FormState> {
  await requireAuth();

  const file = formData.get("image");
  const nameAr = String(formData.get("nameAr") ?? "").trim();
  const nameEn = String(formData.get("nameEn") ?? "").trim();
  const descriptionAr = String(formData.get("descriptionAr") ?? "").trim();
  const descriptionEn = String(formData.get("descriptionEn") ?? "").trim();
  const featured = formData.get("featured") === "on";

  if (!(file instanceof File) || file.size === 0) {
    return { error: "Please choose an image." };
  }
  if (!file.type.startsWith("image/")) {
    return { error: "File must be an image." };
  }
  if (file.size > MAX_FILE_SIZE) {
    return { error: "Image must be under 8MB." };
  }
  if (!nameAr || !nameEn) {
    return { error: "Please provide both an Arabic and English name." };
  }

  try {
    const id = randomUUID();
    const ext = file.name.split(".").pop()?.toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg";
    const blob = await put(`items/${id}.${ext}`, file, {
      access: "public",
      addRandomSuffix: false,
    });

    const items = await getItems();
    const newItem: CatalogItem = {
      id,
      imageUrl: blob.url,
      nameAr,
      nameEn,
      descriptionAr,
      descriptionEn,
      featured,
      createdAt: new Date().toISOString(),
    };
    items.unshift(newItem);
    await saveItems(items);
  } catch {
    return { error: "Upload failed — check that Blob storage is configured." };
  }

  revalidatePublicPages();
  return { success: true };
}

export async function toggleFeaturedAction(id: string) {
  await requireAuth();
  const items = await getItems();
  const item = items.find((i) => i.id === id);
  if (item) {
    item.featured = !item.featured;
    await saveItems(items);
  }
  revalidatePublicPages();
}

export async function deleteItemAction(id: string) {
  await requireAuth();
  const items = await getItems();
  const item = items.find((i) => i.id === id);
  if (item) {
    await del(item.imageUrl).catch(() => {});
    await saveItems(items.filter((i) => i.id !== id));
  }
  revalidatePublicPages();
}
