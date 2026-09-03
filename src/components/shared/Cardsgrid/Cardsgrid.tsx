import { useMemo, useState } from "react";

import { Modal } from "../Modal/Modal";
import { Card } from "../Card";
import { useMembers } from "../../../hooks/useMembers";
import { useRankingByBlocks } from "../../../hooks/useRankingByBlocks";
import { useGridSettings } from "../../../hooks/useGridSettings";
import { SkeletonLoading } from "../../layout/SkeletonLoading";

import type { Member } from "../../../types/members";
import { sortMembers } from "@/helpers";

export const Cardsgrid = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const {
    data: members = [],
    isLoading: isLoadingMembers,
    isError: isMembersError,
    error: membersError,
  } = useMembers();

  const {
    data: sortMode = "created_at",
    isLoading: isLoadingSettings,
    isError: isSettingsError,
    error: settingsError,
  } = useGridSettings();

  const {
    data: rankingData = [],
    isLoading: isLoadingRanking,
    isError: isRankingError,
    error: rankingError,
  } = useRankingByBlocks(sortMode === "stars");

  // Mapa de member_id → block_stars del bloque activo
  const starsMap = useMemo(() => {
    const map: Record<string, number> = {};
    rankingData.forEach((item) => {
      map[item.member_id] = item.block_stars;
    });
    return map;
  }, [rankingData]);

  const sortedMembers = useMemo(() => {
    return sortMembers(members, sortMode, starsMap);
  }, [members, sortMode, starsMap]);

  const openModal = (member: Member): void => {
    setSelectedMember(member);
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    setSelectedMember(null);
  };

  if (
    isLoadingMembers ||
    isLoadingSettings ||
    (sortMode === "stars" && isLoadingRanking)
  )
    return <SkeletonLoading />;
  if (isMembersError)
    return (
      <p role="alert">Error al cargar los miembros: {membersError.message}</p>
    );
  if (isSettingsError)
    return (
      <p role="alert">
        Error al cargar la configuración: {settingsError.message}
      </p>
    );
  if (sortMode === "stars" && isRankingError)
    return (
      <p role="alert">Error al cargar el ranking: {rankingError.message}</p>
    );
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
