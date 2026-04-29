import { useDeferredValue, useState } from "react";

import type { SpriteGif } from "./sprite-gif";

type SpriteGifShowcaseProps = {
  sprites: Array<SpriteGif>;
};

const DISPLAY_LIMIT = 50;

const filterLabels = {
  all: "Tous",
  default: "Standards",
  female: "Femelles",
  form: "Formes",
} as const;

type VariantFilter = keyof typeof filterLabels;

function SpotlightStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/12 bg-white/6 px-4 py-3 backdrop-blur">
      <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/55">{label}</p>
      <p className="mt-1 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}

export default function SpriteGifShowcase({ sprites }: SpriteGifShowcaseProps) {
  const [query, setQuery] = useState("");
  const [variantFilter, setVariantFilter] = useState<VariantFilter>("all");
  const deferredQuery = useDeferredValue(query);
  const normalizedQuery = deferredQuery.trim().toLowerCase();

  const filteredSprites = sprites.filter((sprite) => {
    const matchesVariant = variantFilter === "all" || sprite.variant === variantFilter;
    const matchesQuery =
      normalizedQuery.length === 0 ||
      sprite.label.toLowerCase().includes(normalizedQuery) ||
      sprite.fileName.toLowerCase().includes(normalizedQuery);

    return matchesVariant && matchesQuery;
  });

  const displayedSprites = filteredSprites.slice(0, DISPLAY_LIMIT);
  const spotlightSprite = filteredSprites[0] ?? sprites[0];
  const visibleVariants = {
    all: sprites.length,
    default: sprites.filter((sprite) => sprite.variant === "default").length,
    female: sprites.filter((sprite) => sprite.variant === "female").length,
    form: sprites.filter((sprite) => sprite.variant === "form").length,
  };

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950 text-white shadow-2xl shadow-black/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.18),_transparent_26%),radial-gradient(circle_at_80%_20%,_rgba(244,63,94,0.18),_transparent_22%),linear-gradient(135deg,_rgba(255,255,255,0.02),_transparent_50%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />

      <div className="relative grid gap-8 px-6 py-8 md:px-8 lg:grid-cols-[minmax(0,1.1fr)_22rem] lg:px-10 lg:py-10">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.38em] text-amber-200/80">
              Pokemon Sprite Vault
            </p>
            <div className="max-w-3xl space-y-3">
              <h1 className="font-[Fraunces] text-4xl leading-none md:text-5xl lg:text-6xl">
                Tous les GIFs du dex, dans une seule vitrine.
              </h1>
              <p className="max-w-2xl text-sm leading-6 text-white/72 md:text-base">
                Une galerie vivante de toutes les animations disponibles dans
                <code className="mx-1 rounded bg-white/8 px-2 py-1 text-xs text-white/90">
                  public/assets/sprites/sprites-gif
                </code>
                avec recherche instantanee, variantes et chargement paresseux.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <SpotlightStat label="GIFs" value={sprites.length.toLocaleString("fr-FR")} />
            <SpotlightStat
              label="Affichage"
              value={`${displayedSprites.length.toLocaleString("fr-FR")} / ${filteredSprites.length.toLocaleString("fr-FR")}`}
            />
            <SpotlightStat
              label="Spotlight"
              value={spotlightSprite ? spotlightSprite.label : "Aucun resultat"}
            />
          </div>

          <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto]">
            <label className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 backdrop-blur transition hover:border-white/20 hover:bg-white/8">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-white/45">
                Recherche
              </span>
              <input
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Pikachu, forme 1, femelle..."
                type="search"
                value={query}
              />
            </label>

            <div className="flex flex-wrap gap-2">
              {(Object.keys(filterLabels) as Array<VariantFilter>).map((filterKey) => {
                const isActive = variantFilter === filterKey;

                return (
                  <button
                    className={[
                      "rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] transition",
                      isActive
                        ? "border-amber-300 bg-amber-300 text-neutral-950"
                        : "border-white/12 bg-white/6 text-white/72 hover:border-white/24 hover:bg-white/10",
                    ].join(" ")}
                    key={filterKey}
                    onClick={() => setVariantFilter(filterKey)}
                    type="button"
                  >
                    {filterLabels[filterKey]} · {visibleVariants[filterKey]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <aside className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_46%)]" />
          <div className="relative space-y-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.32em] text-white/45">
                  A la une
                </p>
                <h2 className="mt-2 font-[Fraunces] text-3xl text-white">
                  {spotlightSprite ? spotlightSprite.label : "Aucun resultat"}
                </h2>
              </div>
              <span className="rounded-full border border-white/12 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.28em] text-white/55">
                {spotlightSprite?.variant ?? "all"}
              </span>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-4">
              {spotlightSprite ? (
                <img
                  alt={spotlightSprite.label}
                  className="mx-auto aspect-square w-full max-w-52 object-contain drop-shadow-[0_24px_32px_rgba(0,0,0,0.45)]"
                  height={208}
                  src={spotlightSprite.src}
                  width={208}
                />
              ) : (
                <div className="grid aspect-square place-items-center rounded-[1.25rem] border border-dashed border-white/12 text-sm text-white/50">
                  Aucun GIF pour ce filtre
                </div>
              )}
            </div>

            <div className="grid grid-cols-4 gap-2">
              {filteredSprites.slice(1, 5).map((sprite) => (
                <div
                  className="rounded-2xl border border-white/10 bg-black/20 p-2 transition hover:-translate-y-0.5 hover:border-white/20"
                  key={sprite.id}
                >
                  <img
                    alt={sprite.label}
                    className="aspect-square w-full object-contain"
                    height={72}
                    loading="lazy"
                    src={sprite.src}
                    width={72}
                  />
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="relative border-t border-white/8 bg-black/16 px-4 py-4 md:px-6 lg:px-8">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {displayedSprites.map((sprite) => (
            <article
              className="group rounded-[1.4rem] border border-white/8 bg-white/[0.045] p-3 transition duration-200 hover:-translate-y-1 hover:border-amber-200/35 hover:bg-white/[0.075]"
              key={sprite.id}
              style={{ containIntrinsicSize: "200px 180px", contentVisibility: "auto" }}
            >
              <div className="rounded-[1.1rem] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))] p-3">
                <img
                  alt={sprite.label}
                  className="mx-auto aspect-square w-full max-w-28 object-contain transition duration-300 group-hover:scale-105"
                  height={112}
                  loading="lazy"
                  src={sprite.src}
                  width={112}
                />
              </div>

              <div className="mt-3 space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold text-white">{sprite.label}</h3>
                  <span className="rounded-full border border-white/10 px-2 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-white/45">
                    {sprite.variant}
                  </span>
                </div>
                <p className="truncate font-mono text-[0.72rem] text-white/38">{sprite.fileName}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
