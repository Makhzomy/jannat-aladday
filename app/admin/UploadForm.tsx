"use client";

import { useActionState, useEffect, useRef } from "react";
import { uploadItemAction } from "./actions";

export default function UploadForm() {
  const [state, action, pending] = useActionState(uploadItemAction, undefined);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) formRef.current?.reset();
  }, [state]);

  return (
    <form ref={formRef} action={action} className="mt-4 grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium text-steel" htmlFor="image">
          Photo
        </label>
        <input
          id="image"
          name="image"
          type="file"
          accept="image/*"
          required
          className="mt-1 w-full text-sm text-ink file:mr-3 file:rounded-md file:border-0 file:bg-ink file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-paper"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-steel" htmlFor="nameEn">
          Name (English)
        </label>
        <input
          id="nameEn"
          name="nameEn"
          required
          className="mt-1 w-full rounded-md border border-haze px-3 py-2 focus:border-date focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-steel" htmlFor="nameAr">
          Name (Arabic)
        </label>
        <input
          id="nameAr"
          name="nameAr"
          dir="rtl"
          required
          className="mt-1 w-full rounded-md border border-haze px-3 py-2 focus:border-date focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-steel" htmlFor="descriptionEn">
          Description (English) — optional
        </label>
        <textarea
          id="descriptionEn"
          name="descriptionEn"
          rows={2}
          className="mt-1 w-full rounded-md border border-haze px-3 py-2 focus:border-date focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-steel" htmlFor="descriptionAr">
          Description (Arabic) — optional
        </label>
        <textarea
          id="descriptionAr"
          name="descriptionAr"
          dir="rtl"
          rows={2}
          className="mt-1 w-full rounded-md border border-haze px-3 py-2 focus:border-date focus:outline-none"
        />
      </div>

      <label className="flex items-center gap-2 text-sm text-ink sm:col-span-2">
        <input type="checkbox" name="featured" className="h-4 w-4" />
        Show on homepage (featured)
      </label>

      {state?.error && <p className="text-sm text-red-600 sm:col-span-2">{state.error}</p>}
      {state?.success && <p className="text-sm text-green-700 sm:col-span-2">Uploaded.</p>}

      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-steel disabled:opacity-60 sm:col-span-2"
      >
        {pending ? "Uploading…" : "Upload"}
      </button>
    </form>
  );
}
