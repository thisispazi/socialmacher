import Image from "next/image";

type Example = {
  handle: string;
  avatar: string;
  image: string;
  caption: string;
};

const examples: Example[] = [
  {
    handle: "microneedling_studio",
    avatar: "/images/Microneedle.png",
    image: "/images/1.jpg",
    caption:
      "FÜHL dich endlich wieder wohl in deiner Haut ✨ Microneedling regt die Hauterneuerung und Kollagenproduktion an …",
  },
  {
    handle: "cafe_latte_vienna",
    avatar: "/images/Cafe.png",
    image: "/images/2.jpg",
    caption:
      "Wo aus einem Kaffee schnell zwei Stunden werden, weil man sich endlich Zeit nimmt für gute Gespräche …",
  },
  {
    handle: "tom.business.coach",
    avatar: "/images/Coach.png",
    image: "/images/3.jpg",
    caption:
      "Zuhören reicht nicht. Verstehen auch nicht. Veränderung passiert erst im Handeln und genau da bleiben die meisten stehen …",
  },
];

export function PostExamples() {
  return (
    <section className="py-24 md:py-32 bg-neutral-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
            So könnten Ihre Posts aussehen
          </h2>
          <p className="mt-4 text-neutral-600">
            Drei Branchen, drei Stilwelten – so sieht professioneller Content
            aus der Region aus.
          </p>
          <p className="mt-2 text-xs italic text-neutral-500">
            Beispiel-Visualisierungen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {examples.map((ex) => (
            <div
              key={ex.handle}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Instagram-Style Header mit echtem Profilbild */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-100">
                <div className="w-9 h-9 rounded-full overflow-hidden bg-neutral-100 relative shrink-0 ring-2 ring-white">
                  <Image
                    src={ex.avatar}
                    alt={`${ex.handle} Profilbild`}
                    fill
                    className="object-cover"
                    sizes="36px"
                  />
                </div>
                <span className="text-sm font-semibold">{ex.handle}</span>
              </div>

              {/* Post-Bild */}
              <div className="aspect-square bg-neutral-100 relative overflow-hidden">
                <Image
                  src={ex.image}
                  alt={`Post von ${ex.handle}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Caption */}
              <div className="p-4">
                <p className="text-sm leading-relaxed text-neutral-700 line-clamp-4">
                  <span className="font-semibold">{ex.handle}</span>{" "}
                  {ex.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}