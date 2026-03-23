import { useMemo, useState } from "react";

import { Modal } from "../Modal/Modal";
import { Card } from "../Card";
import { useMembers } from "../../../hooks/useMembers";
import { useRankingByBlocks } from "../../../hooks/useRankingByBlocks";
import { useGridSettings } from "../../../hooks/useGridSettings";
import { SkeletonLoading } from "../../layout/SkeletonLoading";

import type { Member } from "../../../types/members";

// ID fijo de Andrea Cazarín — siempre aparece al inicio
const ANDREA_ID = "c0aa013d-be71-47e8-a102-6b06977b7d17";

export const Cardsgrid = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const {
    data: members = [],
    isLoading: isLoadingMembers,
    isError,
    error,
  } = useMembers();

  const { data: sortMode = "created_at", isLoading: isLoadingSettings } =
    useGridSettings();

  const { data: rankingData = [], isLoading: isLoadingRanking } =
    useRankingByBlocks();

  // Mapa de member_id → block_stars del bloque activo
  const starsMap = useMemo(() => {
    const map: Record<string, number> = {};
    rankingData.forEach((item) => {
      map[item.member_id] = item.block_stars;
    });
    return map;
  }, [rankingData]);

  const sortedMembers = useMemo(() => {
    // Separar a Andrea del resto
    const andrea = members.find((m) => m.id === ANDREA_ID);
    const rest = members.filter((m) => m.id !== ANDREA_ID);

    if (sortMode === "stars") {
      // Ordenar por estrellas del bloque activo (descendente),
      // los miembros sin estrellas van al final ordenados por created_at
      rest.sort((a, b) => {
        const starsA = starsMap[a.id] ?? -1;
        const starsB = starsMap[b.id] ?? -1;

        if (starsA !== starsB) return starsB - starsA;

        // Desempate por created_at si tienen las mismas estrellas
        return (
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        );
      });
    } else {
      // Ordenar por fecha de creación (ascendente — más antiguos primero)
      rest.sort(
        (a, b) =>
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
      );
    }

    // Andrea siempre al frente
    return andrea ? [andrea, ...rest] : rest;
  }, [members, sortMode, starsMap]);

  const openModal = (member: Member): void => {
    setSelectedMember(member);
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    setSelectedMember(null);
  };

  if (isLoadingMembers || isLoadingSettings || isLoadingRanking)
    return <SkeletonLoading />;
  if (isError) return <p>Error al cargar los miembros {error?.message}</p>;
  if (members.length === 0)
    return <p className="my-10 text-center">No se encontraron miembros.</p>;

  return (
    <div className="mb-20 w-full px-5 md:mt-0 md:px-24">
      <div className="mb-5 flex flex-col items-center justify-center">
        <section className="grid w-full grid-cols-[repeat(auto-fit,minmax(20rem,20rem))] justify-center gap-8">
          {sortedMembers.map((member) => (
            <Card
              key={member.id}
              member={member}
              onClick={() => openModal(member)}
            />
          ))}
        </section>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} member={selectedMember} />
    </div>
  );
};
