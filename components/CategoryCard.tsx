import Link from "next/link";
import type { Category } from "@/content/types";
import { categoryIcons } from "./icons/CategoryIcons";
import type { Locale } from "@/lib/site";

export default function CategoryCard({ category, locale }: { category: Category; locale: Locale }) {
  const Icon = categoryIcons[category.id];

  return (
    <Link
      href={`/${locale}/services#${category.id}`}
      className="group flex flex-col gap-3 rounded-2xl border border-haze/50 bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-date/60 hover:shadow-[0_12px_30px_-16px_rgba(27,42,56,0.35)]"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-steel/10 text-steel transition-colors group-hover:bg-date/10 group-hover:text-date">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="text-h3 text-ink">{category.title}</h3>
      <p className="body-copy text-sm text-steel">{category.description}</p>
    </Link>
  );
}
