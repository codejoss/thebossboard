import { formatCareer } from "@/helpers";
import type { Member } from "@/types/members";
import {
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/shared/icons/SocialNetwork";

interface CardProps {
  member: Member;
  onClick: () => void;
}

export function Card({ member, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className="group max-w-90 min-w-80 translate-y-8 cursor-pointer rounded-2xl border border-stone-200 bg-white p-6 whitespace-break-spaces backdrop-blur-sm transition-all duration-300 hover:scale-103 hover:shadow-xl"
    >
      {/* <!-- Profile Photo --> */}
      <div className="mb-4 flex justify-center">
        <img
          src={member.picture_url}
          alt={member.member_name}
          className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-lg transition-transform duration-300"
        />
      </div>

      {/* <!-- Card Info --> */}
      <div className="flex flex-1 flex-col justify-between text-center">
        <div>
          {/* Name */}
          <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-stone-800 capitalize">
            {`${member.member_name} ${member.father_last_name}`}
          </h3>
          {/* Location */}
          <p className="mb-4 text-sm font-bold text-neutral-500">
            {member.address_city}, {member.address_country}
          </p>
        </div>

        <div className="space-y-4">
          {/* Profesion */}
          <div className="from-bossDark/80 to-bossDark flex max-h-18 min-h-12 max-w-80 min-w-30 items-center justify-center rounded-xl bg-linear-to-br px-3 py-2 text-xs font-semibold text-white shadow-md">
            {member.nickname === "Andrea Cazarín"
              ? member.career
              : formatCareer(member.career, 60)}
          </div>
          {/* Social Network Link */}
          <div className="border-bossDark/30 flex max-h-18 min-h-12 max-w-80 min-w-30 items-center justify-center space-x-2 rounded-xl border-2 border-dotted p-1.5">
            <p className="text-bossDark text-end text-xs font-bold">
              Contáctame Aquí:
            </p>
            <div
              className="flex items-center justify-center space-x-2"
              onClick={(e) => e.stopPropagation()}
            >
              {member.instagram_url && (
                <a
                  href={`http://www.instagram.com/${member.instagram_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-300 hover:scale-120"
                >
                  <InstagramIcon />
                </a>
              )}
              {member.tiktok_url && (
                <a
                  href={`http://www.tiktok.com/@${member.tiktok_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-300 hover:scale-120"
                >
                  <TikTokIcon />
                </a>
              )}
              {member.youtube_url && (
                <a
                  href={`http://www.youtube.com/@${member.youtube_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-300 hover:scale-120"
                >
                  <YouTubeIcon />
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
                    width="24"
                    height="24"
                    src="https://vzfzqtrfktrvnxdykrbn.supabase.co/storage/v1/object/public/imagesMomboss/assets/wwwIcon.png"
                    alt="domain"
                    className="filter-[filter: brightness(0) saturate(100%) invert(47%) sepia(16%) saturate(447%) hue-rotate(333deg) brightness(97%) contrast(90%);]"
                  />
                </a>
              )}
            </div>
          </div>
          {/* End Social Network List */}
        </div>
      </div>
    </div>
  );
}
