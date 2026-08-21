import { redirect } from "next/navigation";
import Image from "next/image";
import { isAuthenticated } from "@/lib/admin-auth";
import { getItems } from "@/lib/items";
import { logoutAction, toggleFeaturedAction, deleteItemAction } from "./actions";
import UploadForm from "./UploadForm";

export default async function AdminDashboard() {
  if (!(await isAuthenticated())) redirect("/admin/login");
  const items = await getItems();

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-ink">Product Photos</h1>
        <form action={logoutAction}>
          <button type="submit" className="text-sm font-semibold text-steel hover:text-date">
            Sign out
          </button>
        </form>
      </div>

      <section className="mt-8 rounded-2xl border border-haze/60 bg-white/60 p-6">
        <h2 className="text-lg font-semibold text-ink">Upload a photo</h2>
        <UploadForm />
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-ink">
          {items.length} item{items.length === 1 ? "" : "s"}
        </h2>

        {items.length === 0 ? (
          <p className="mt-3 text-sm text-steel">No photos yet — upload one above.</p>
        ) : (
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <li key={item.id} className="overflow-hidden rounded-xl border border-haze/50 bg-white">
                <div className="relative h-40 w-full bg-haze/20">
                  <Image
                    src={item.imageUrl}
                    alt={item.nameEn}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, 50vw"
                  />
                </div>
                <div className="p-3">
                  <p className="font-semibold text-ink">{item.nameEn}</p>
                  <p dir="rtl" className="text-sm text-steel">
                    {item.nameAr}
                  </p>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <form action={toggleFeaturedAction.bind(null, item.id)}>
                      <button
                        type="submit"
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          item.featured ? "bg-date text-paper" : "border border-haze text-steel"
                        }`}
                      >
                        {item.featured ? "Featured" : "Feature"}
                      </button>
                    </form>
                    <form action={deleteItemAction.bind(null, item.id)}>
                      <button type="submit" className="text-xs font-semibold text-red-600 hover:text-red-700">
                        Delete
                      </button>
                    </form>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
