import { mapEmbedSrc } from "@/lib/site";

export default function MapEmbed({ title }: { title: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border-2 border-haze">
      <div className="aspect-[4/3] w-full sm:aspect-[16/9]">
        <iframe
          src={mapEmbedSrc}
          title={title}
          width="600"
          height="450"
          style={{ border: 0 }}
          className="h-full w-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
}
