import type { CatalogItem } from "./items";

/**
 * Placeholder catalog shown until real photos are uploaded through /admin.
 * Stock photography (Pexels License — free for commercial use), stored
 * locally under public/gallery-seed/. Used only as a fallback when Blob
 * storage has no items.json yet (e.g. Blob isn't configured, or the
 * catalog is genuinely empty) — real uploads always take priority.
 */
export const SEED_ITEMS: CatalogItem[] = [
  {
    id: "seed-notebooks",
    imageUrl: "/gallery-seed/notebooks-stack.jpg",
    nameEn: "5-Subject Spiral Notebooks",
    nameAr: "دفاتر حلقية 5 مواد",
    descriptionEn: "Sturdy spiral-bound notebooks in a range of colors, for school or office.",
    descriptionAr: "دفاتر حلقية متينة بألوان متعددة، للاستخدام المدرسي والمكتبي.",
    featured: true,
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "seed-pens",
    imageUrl: "/gallery-seed/pens-notes.jpg",
    nameEn: "Assorted Pens & Sticky Notes",
    nameAr: "أقلام متنوعة وأوراق لاصقة",
    descriptionEn: "A colorful mix of pens alongside sticky notes for everyday writing.",
    descriptionAr: "تشكيلة ملونة من الأقلام مع الأوراق اللاصقة للكتابة اليومية.",
    featured: true,
    createdAt: "2026-01-01T00:00:01.000Z",
  },
  {
    id: "seed-binders",
    imageUrl: "/gallery-seed/binders-office.jpg",
    nameEn: "Lever-Arch Files",
    nameAr: "ملفات رافعة (Lever-Arch)",
    descriptionEn: "Durable lever-arch binders for organizing and archiving documents.",
    descriptionAr: "ملفات رافعة متينة لترتيب وأرشفة المستندات في المكتب.",
    featured: true,
    createdAt: "2026-01-01T00:00:02.000Z",
  },
  {
    id: "seed-office",
    imageUrl: "/gallery-seed/notebooks-stapler.jpg",
    nameEn: "Stapler & Notebook Set",
    nameAr: "دباسة مع دفاتر",
    descriptionEn: "A compact stapler alongside notebooks — everyday essentials for any desk.",
    descriptionAr: "دباسة صغيرة مع دفاتر — أساسيات لا يخلو منها أي مكتب.",
    featured: true,
    createdAt: "2026-01-01T00:00:03.000Z",
  },
  {
    id: "seed-pencils",
    imageUrl: "/gallery-seed/colored-pencils.jpg",
    nameEn: "Colored Pencil Set",
    nameAr: "طقم أقلام تلوين",
    descriptionEn: "A full set of colored pencils in a metal case, for school and art projects.",
    descriptionAr: "طقم كامل من أقلام التلوين بعلبة معدنية، للمدرسة ومشاريع الرسم.",
    featured: true,
    createdAt: "2026-01-01T00:00:04.000Z",
  },
  {
    id: "seed-whiteboard",
    imageUrl: "/gallery-seed/whiteboard-room.jpg",
    nameEn: "Flip-Chart Whiteboard",
    nameAr: "سبورة بيضاء قلابة",
    descriptionEn: "A mobile flip-chart whiteboard with markers, for meetings and presentations.",
    descriptionAr: "سبورة بيضاء متحركة مع أقلام، جاهزة للاجتماعات والعروض التقديمية.",
    featured: true,
    createdAt: "2026-01-01T00:00:05.000Z",
  },
  {
    id: "seed-paper",
    imageUrl: "/gallery-seed/paper-stack.jpg",
    nameEn: "Copy Paper Stack",
    nameAr: "رزمة ورق طباعة",
    descriptionEn: "Clean, bright copy paper — the everyday basic for any office or school.",
    descriptionAr: "ورق طباعة أبيض ناصع — الأساس اليومي لأي مكتب أو مدرسة.",
    featured: false,
    createdAt: "2026-01-01T00:00:06.000Z",
  },
  {
    id: "seed-backpack",
    imageUrl: "/gallery-seed/school-backpack.jpg",
    nameEn: "School Backpack",
    nameAr: "حقيبة مدرسية",
    descriptionEn: "A durable school backpack, sized to carry books and supplies comfortably.",
    descriptionAr: "حقيبة مدرسية متينة، بحجم مناسب لحمل الكتب والمستلزمات بارتياح.",
    featured: false,
    createdAt: "2026-01-01T00:00:07.000Z",
  },
];
