import { useEffect, useRef } from "react";

import type { Member } from "../../../types/members";
import { InstagramIcon, TikTokIcon, YouTubeIcon } from "../icons/SocialNetwork";
import { getYearsOld, formatFirstLetterCap } from "@/helpers";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: Member | null;
}

export function Modal({ isOpen, onClose, member }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const socialIconSize = 30;

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

  if (!isOpen || !member) return null;

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
          className="bg-bossDark hover:bg-bossPink fixed right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full text-center text-3xl font-bold text-white transition-colors duration-200 hover:text-black md:absolute md:top-3 md:right-3"
        >
          ×
        </button>

        {/* Data modal */}
        <div className="mb-0 flex w-full flex-col items-center justify-around md:mb-0 md:w-90 md:items-center">
          {/* Img Profile */}
          <div className="modal-image h-110 overflow-hidden rounded-xl bg-gray-200 md:h-108 md:w-80 lg:w-80">
            <img
              src={member.picture_url}
              alt={member.member_name}
              className="h-full w-full object-cover"
            />
          </div>
          {/* Social URL */}
          <div className="border-bossDark/30 m-4 w-full rounded-2xl border-3 border-dotted p-4 md:max-w-80 md:p-2">
            <p className="text-bossDark mb-1 text-center text-lg font-bold">
              Contáctame Aquí:
            </p>
            <div
              className="flex items-center justify-center space-x-3"
              onClick={(e) => e.stopPropagation()}
            >
              {member.instagram_url && (
                <a
                  href={`http://www.instagram.com/${member.instagram_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-300 hover:scale-120"
                >
                  <InstagramIcon size={socialIconSize} />
                </a>
              )}
              {member.tiktok_url && (
                <a
                  href={`http://www.tiktok.com/@${member.tiktok_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-300 hover:scale-120"
                >
                  <TikTokIcon size={socialIconSize} />
                </a>
              )}
              {member.youtube_url && (
                <a
                  href={`http://www.youtube.com/@${member.youtube_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-300 hover:scale-120"
                >
                  <YouTubeIcon size={socialIconSize} />
                </a>
              )}
              {member.website_url && (
                <a
                  href={member.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bossDark transform font-black transition-all duration-300 hover:scale-120"
                >
                  <img
                    width={socialIconSize}
                    height={socialIconSize}
                    src="https://vzfzqtrfktrvnxdykrbn.supabase.co/storage/v1/object/public/imagesMomboss/assets/wwwIcon.png"
                    alt="domain"
                    className="filter-[filter: brightness(0) saturate(100%) invert(47%) sepia(16%) saturate(447%) hue-rotate(333deg) brightness(97%) contrast(90%);]"
                  />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="modal-info flex-1 space-y-4 md:overflow-y-auto">
          {/* Name */}
          <h2
            id="modal-name"
            className="text-bossDark border-b-2 border-stone-300 pb-4 text-4xl font-bold capitalize"
          >
            {`${member.member_name.toLowerCase()} ${member.father_last_name.toLowerCase()}`}
          </h2>
          <p className="text-bossDark mb-6 text-2xl font-semibold capitalize">
            {`(${member.nickname.toLowerCase()})`}
          </p>

          <div className="mt-0 space-y-4 text-stone-600 md:mt-0">
            {/* Age */}
            <div className="flex items-center space-x-3">
              <span className="w-20 font-semibold text-stone-700">Edad:</span>
              <span>
                {member.birthday ? getYearsOld(member.birthday) : "-"}
              </span>
            </div>
            {/* Location */}
            <div className="flex items-center space-x-3">
              <span className="w-20 font-semibold text-stone-700">
                Ubicación:
              </span>
              <span id="modal-location" className="capitalize">
                {member.address_city.toLowerCase()},{" "}
                {member.address_state.toLowerCase()},{" "}
                {member.address_country.toLowerCase()}
              </span>
            </div>
            {/* Career */}
            <div className="flex space-x-3">
              <span className="w-20 font-semibold text-stone-700">
                Profesión:
              </span>
              <span id="modal-location">
                {member.nickname === "Andrea Cazarín"
                  ? member.career
                  : formatFirstLetterCap(member.career)}
              </span>
            </div>
            {/* Goals and dream */}
            <div className="border-t border-stone-200 pt-4">
              <h3 className="mb-2 font-semibold text-stone-700">
                Propósito/Sueño:
              </h3>
              <p className="leading-relaxed text-stone-600">
                {formatFirstLetterCap(member.dream)}
              </p>
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
                {formatFirstLetterCap(member.motivation)}
              </p>
            </div>
            {/* Message */}
            <div>
              <h3 className="mb-2 font-semibold text-stone-700">Mensaje:</h3>
              <p id="modal-message" className="leading-relaxed text-stone-600">
                {formatFirstLetterCap(member.member_message)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
