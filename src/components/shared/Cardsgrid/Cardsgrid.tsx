import { useMemo, useState } from "react";

import { Modal } from "../Modal/Modal";
import { Card } from "../Card";
import { useMembers } from "../../../hooks/useMembers";
import { SkeletonLoading } from "../../layout/SkeletonLoading";

import type { Member } from "../../../types/members";

export const Cardsgrid = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const { data: members = [], isLoading, isError, error } = useMembers();

  const sortedMembers = useMemo(() => {
    return [...members].sort((a, b) => {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      return dateA - dateB;
    });
  }, [members]);

  const openModal = (member: Member): void => {
    setSelectedMember(member);
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    setSelectedMember(null);
  };

  if (isLoading) return <SkeletonLoading />;
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
