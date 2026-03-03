import { useEffect, useRef } from "react";

import type { Member } from "../../../types/members";
import { formatCareer } from "../../../helpers/formatCarrer";
import { InstagramIcon, TikTokIcon, YouTubeIcon } from "../icons/SocialNetwork";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: Member | null;
}

export function Modal({ isOpen, onClose, member }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const socialIconSize = 46;

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
          className="fixed right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-bossDark text-center text-3xl font-bold text-white transition-colors duration-200 hover:bg-bossPink hover:text-black md:absolute md:top-3 md:right-3"
        >
          ×
        </button>

        {/* Data modal */}
        <div className="mb-0 flex w-full flex-col justify-around items-center md:mb-0 md:w-90 md:items-center">
          {/* Img Profile */}
          <div className="modal-image h-110 overflow-hidden rounded-xl bg-gray-200 md:h-108 md:w-80 lg:w-80">
            <img
              src={member.picture_url}
              alt={member.member_name}
              className="h-full w-full object-cover"
            />
          </div>
          {/* Social URL */}
          <div
            className="flex justify-center items-center space-x-3"
            onClick={(e) => e.stopPropagation()}
          >
            {member.instagram_url && (
              <a
                href={`http://www.instagram.com/${member.instagram_url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-120 transition-all duration-300"
              >
                <InstagramIcon size={socialIconSize} />
              </a>
            )}
            {member.tiktok_url && (
              <a
                href={`http://www.tiktok.com/@${member.tiktok_url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-120 transition-all duration-300"
              >
                <TikTokIcon size={socialIconSize} />
              </a>
            )}
            {member.youtube_url && (
              <a
                href={`http://www.youtube.com/@${member.youtube_url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-120 transition-all duration-300"
              >
                <YouTubeIcon size={socialIconSize} />
              </a>
            )}
            {member.website_url && (
              <a
                href={member.website_url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-black text-bossDark transform hover:scale-120 transition-all duration-300"
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

        {/* Info */}
        <div className="modal-info flex-1 space-y-4 md:overflow-y-auto">
          <h2
            id="modal-name"
            className="text-4xl font-bold text-bossDark capitalize border-b-2 border-stone-300 pb-4"
          >
            {`${member.member_name} ${member.father_last_name}`}
          </h2>
          <p className=" mb-6 text-2xl font-semibold text-bossDark capitalize">
            {`(${member.nickname})`}
          </p>

          <div className="mt-0 space-y-4 text-stone-600 md:mt-0">
            {/* Name */}
            <div className="flex items-center space-x-3">
              <span className="w-20 font-semibold text-stone-700">Edad:</span>
              <span>
                {member.birthday
                  ? new Date().getFullYear() -
                    new Date(member.birthday).getFullYear()
                  : ""}{" "}
                años
              </span>
            </div>
            {/* location */}
            <div className="flex items-center space-x-3">
              <span className="w-20 font-semibold text-stone-700">
                Ubicación:
              </span>
              <span id="modal-location">
                {member.address_city}, {member.address_state},{" "}
                {member.address_country}
              </span>
            </div>
            {/* Carrer */}
            <div className="flex  space-x-3">
              <span className="w-20 font-semibold text-stone-700">
                Profesión:
              </span>
              <span id="modal-location">
                {formatCareer(member.career, 200)}
              </span>
            </div>
            {/* Goals and dream */}
            <div className="border-t border-stone-200 pt-4">
              <h3 className="mb-2 font-semibold text-stone-700">
                Propósito/Sueño:
              </h3>
              <p className="leading-relaxed text-stone-600">{member.dream}</p>
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
                {member.motivation}
              </p>
            </div>
            {/* Message */}
            <div>
              <h3 className="mb-2 font-semibold text-stone-700">Mensaje:</h3>
              <p id="modal-message" className="leading-relaxed text-stone-600">
                {member.member_message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
