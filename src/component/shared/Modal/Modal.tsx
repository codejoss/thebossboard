import { useEffect, useRef } from "react";
import { HiExternalLink } from "react-icons/hi";

import type { Person } from "../../../types/person";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  person: Person | null;
}

export function Modal({ isOpen, onClose, person }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      modalRef.current?.focus();

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      document.addEventListener("keydown", handleEscape);

      return () => {
        document.body.style.overflow = "unset";
        document.removeEventListener("keydown", handleEscape);
        previousActiveElement.current?.focus();
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !person) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="absolute inset-0 bg-stone-900/50" />

      {/* Interior modal */}
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative z-40 mt-0 flex h-auto max-h-[90vh] w-full max-w-4xl flex-col justify-between overflow-y-auto rounded-2xl bg-white p-6 shadow-xl focus:outline-none md:h-150 md:flex-row md:overflow-y-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="fixed right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-bossDark text-center text-3xl font-bold text-white transition-colors duration-200 hover:bg-bossPink hover:text-black md:absolute md:top-3 md:right-3"
        >
          ×
        </button>

        {/* Data modal */}
        <div className="mb-0 flex w-full flex-col items-center md:mb-0 md:w-90 md:items-start">
          {/* Img Profile */}
          <div className="modal-image h-110 overflow-hidden rounded-xl bg-gray-200 shadow-lg md:h-108 md:w-80 lg:w-80">
            <img
              src={person.profileImage}
              alt={person.name}
              className="h-full w-full object-cover"
            />
          </div>
          {/* Social URL */}
          <div className="mb-10">
            <a
              href={person.socialNetwork}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-bossDark to-bossMedium px-8 py-3 font-semibold text-white transition-colors hover:from-bossGrayDark hover:to-bossGrayLight hover:text-black hover:shadow-lg md:mt-6"
            >
              Ver Perfil Social
              <HiExternalLink size={24} />
            </a>
          </div>
        </div>

        {/* Info */}
        <div className="modal-info flex-1 space-y-6 md:overflow-y-auto">
          <h2
            id="modal-name"
            className="mb-6 text-4xl font-light text-stone-700 capitalize"
          >
            {person.name}
          </h2>

          <div className="mt-0 space-y-4 text-stone-600 md:mt-0">
            {/* Name */}
            <div className="flex items-center space-x-3">
              <span className="w-20 font-semibold text-stone-700">Edad:</span>
              <span>{person.age} años</span>
            </div>
            {/* location */}
            <div className="flex items-center space-x-3">
              <span className="w-20 font-semibold text-stone-700">
                Ubicación:
              </span>
              <span id="modal-location">{person.city_country}</span>
            </div>
            {/* Carrer */}
            <div className="flex items-center space-x-3">
              <span className="w-20 font-semibold text-stone-700">
                Profesión:
              </span>
              <span id="modal-location">{person.carrer}</span>
            </div>
            {/* Goals and dream */}
            <div className="border-t border-stone-200 pt-4">
              <h3 className="mb-2 font-semibold text-stone-700">
                Propósito/Sueño:
              </h3>
              <p className="leading-relaxed text-stone-600">{person.goal}</p>
            </div>
            {/* Motivation */}
            <div>
              <h3 className="mb-2 font-semibold text-stone-700">
                ¿Qué te motivó a unirte a The Boss Room VIP?
              </h3>
              <p
                id="modal-motivation"
                className="leading-relaxed text-stone-600"
              >
                {person.motivation}
              </p>
            </div>
            {/* Message */}
            <div>
              <h3 className="mb-2 font-semibold text-stone-700">Mensaje:</h3>
              <p id="modal-message" className="leading-relaxed text-stone-600">
                {person.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
