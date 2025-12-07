import { useState, useEffect } from "react";

import { Modal } from "../Modal/Modal";
import { Card } from "../Card";

import type { Person } from "../../../types/person";

import membersData from '../../../data/members.json';

export const Cardsgrid = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [people, setPeople] = useState<Person[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const openModal = (person: Person): void => {
    setSelectedPerson(person);
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    setSelectedPerson(null);
  };

  useEffect(() => {
    // import all images from src/assets/profileimg and get their built URLs
    const images = import.meta.glob('/src/assets/profileimg/*', { eager: true, as: 'url' }) as Record<string, string>;

    // Map members data and replace profileImage path with bundled URL if available
    const mapped = (membersData as Person[]).map((p) => {
      const imgPath = p.profileImage;
      // Ensure we match the same key format used by the glob (absolute path)
      const resolved = images[imgPath] || imgPath;
      return { ...p, profileImage: resolved };
    });

    setPeople(mapped);
  }, []);

  return (
    <div className="mb-20 w-full px-5 md:mt-0 md:px-24">
      <div className="flex flex-col items-center justify-center">
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {people.map((person) => (
            <Card
              // eslint-disable-next-line react-hooks/purity
              key={Math.random() * 1000}
              person={person}
              onClick={() => openModal(person)}
            />
          ))}
        </section>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} person={selectedPerson} />
    </div>
  );
};
