import React from "react";
import { useMembers } from "@/hooks/useMembers";
import { useRankingByBlocks } from "@/hooks/useRankingByBlocks";

// ─── Hook de datos ─────────────────────────────────────────────────────────────
interface RankingItem {
  photo_url: string | undefined;
  block_id: string;
  block_name: string;
  year_of_block: number;
  member_id: string;
  member_name: string;
  nickname: string;
  block_stars: number;
  block_rank: number;
}

// ─── Star Badge ────────────────────────────────────────────────────────────────
function StarBadge({ count }: { count: number }) {
  return (
    <div className="relative h-11 w-11 shrink-0">
      <svg viewBox="0 0 44 44" className="h-11 w-11" fill="none">
        <polygon
          points="22,3 27,16.5 41,16.5 30,24.5 34,38 22,30 10,38 14,24.5 3,16.5 17,16.5"
          fill="#E5D48D"
          stroke="#F5C842"
          strokeWidth="1.5"
        />
      </svg>
      <span className="absolute inset-0 mt-0.5 flex items-center justify-center text-lg leading-none font-black text-[#7A5530]">
        {count}
      </span>
    </div>
  );
}

// ─── Avatar ────────────────────────────────────────────────────────────────────
function Avatar({ name, photoUrl }: { name: string; photoUrl?: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white/60 bg-white/25 text-sm font-bold text-white">
      {photoUrl ? (
        <img src={photoUrl} alt={name} className="h-full w-full object-cover" />
      ) : (
        initials
      )}
    </div>
  );
}

// ─── Fila del ranking ──────────────────────────────────────────────────────────
function RankRow({
  item,
  membersMap,
}: {
  item: RankingItem;
  membersMap: Record<string, string>;
}) {
  const isFirst = item.block_rank === 1;
  const photoUrl = membersMap[item.member_id] || item.photo_url;

  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border border-white/35 px-3 py-2.5 transition-all duration-200 ${isFirst ? "bg-yellow-600" : "bg-white/16"} `}
    >
      {/* Posición */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/50 bg-white/25">
        <span
          className="text-xl leading-none font-black text-white"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {item.block_rank}
        </span>
      </div>

      {/* Avatar */}
      <Avatar name={item.member_name} photoUrl={photoUrl} />

      {/* Nombre */}
      <span className="flex-1 truncate text-sm font-bold tracking-widest text-white uppercase">
        {item.member_name}
      </span>

      {/* Estrellas */}
      <StarBadge count={item.block_stars} />
    </div>
  );
}

// ─── Componente principal ──────────────────────────────────────────────────────
/**
 * Props:
 *   blockId   {number|null}  – filtra por bloque específico. null = todos.
 *   block_name {string}       – ej. "Bloque 1"
 *   year      {number}       – ej. 2026
 *   handle    {string}       – ej. "@thebossroomvip"
 */
export function RankingStars() {
  const { data, isLoading, isError, error } = useRankingByBlocks();
  const { data: membersData } = useMembers();

  const rankingData = Array.isArray(data) ? data : [];
  const blockName = Array.isArray(data) ? data[0]?.block_name : undefined;
  const yearOfBlock = Array.isArray(data) ? data[0]?.year_of_block : undefined;
  const handle = Array.isArray(data) ? data[0]?.handle : undefined;

  // Crear mapa de member_id -> picture_url
  const membersMap = React.useMemo(() => {
    const map: Record<string, string> = {};
    if (Array.isArray(membersData)) {
      membersData.forEach((member) => {
        if (member.id && member.picture_url) {
          map[member.id] = member.picture_url;
        }
      });
    }
    return map;
  }, [membersData]);

  return (
    <div className="m-8 mx-auto w-full max-w-sm font-['Montserrat',sans-serif]">
      {/* Tarjeta principal */}
      <div className="from-bossMedium to-bossDark relative overflow-hidden rounded-3xl bg-linear-to-b px-5 py-7">
        {/* Header */}
        <p className="mb-1 text-center text-sm font-semibold tracking-wide text-[#7A5530] uppercase">
          {blockName} — {yearOfBlock}
        </p>
        <div className="mb-1 text-center leading-tight">
          <p className="font-bebas text-5xl font-bold tracking-wider text-white">
            RETOS <span className="text-bossPink">BOSS</span>
          </p>
          <p className="mt-0.5 text-sm font-bold tracking-wider text-white/80 uppercase">
            The Boss Room VIP
          </p>
        </div>
        {/* Pill título */}
        <div className="my-4 rounded-xl bg-[#7A5530] py-2.5 text-center">
          <span className="font-bebas text-xl font-bold tracking-[8px] text-white">
            RANKING
          </span>
        </div>
        {/* Lista */}
        <div className="flex flex-col gap-2.5">
          {isLoading && (
            <div className="py-8 text-center text-sm text-white/70">
              Cargando ranking...
            </div>
          )}

          {isError && (
            <div className="py-8 text-center text-sm text-red-200">
              Error: {error.message}
            </div>
          )}

          {rankingData.map((item) => (
            <RankRow key={item.member_id} item={item} membersMap={membersMap} />
          ))}

          {rankingData.length === 0 && !isLoading && (
            <div className="py-8 text-center text-sm text-white/70">
              Sin datos para este bloque.
            </div>
          )}
        </div>
        {/* Footer */}
        <div className="mt-5 text-center">
          <a
            href="https://www.instagram.com/thebossroomvip/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-white px-7 py-2 text-xs font-semibold tracking-wide text-[#7A5530]"
          >
            {handle || "@thebossroomvip"}
          </a>
        </div>
      </div>
    </div>
  );
}
