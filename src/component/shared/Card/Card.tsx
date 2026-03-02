import type { Member } from "../../../types/members";
import { InstagramIcon, TikTokIcon, YouTubeIcon } from "../icons/SocialNetwork";

interface CardProps {
  member: Member;
  onClick: () => void;
}

export function Card({ member, onClick }: CardProps) {
  

  return (
    <div
      onClick={onClick}
      className="group translate-y-8 cursor-pointer rounded-2xl border border-stone-200 bg-linear-to-br from-stone-50 to-stone-100 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl"
    >
      {/* <!-- Profile Photo --> */}
      <div className="mb-4 flex justify-center">
        <img
          src={member.picture_url}
          alt={member.member_name}
          className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-lg transition-transform duration-300 group-hover:shadow-xl"
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
          <p className="mb-3 py-1 text-sm font-bold text-stone-500">
            {member.address_city},{" "}
            {member.address_country}
          </p>
        </div>
        <div className="space-y-3">
          {/* Profesion */}
          <div className="rounded-full bg-linear-to-br from-bossDark/80 to-bossDark px-3 py-2 text-xs font-semibold text-white shadow-md">
            {member.career}
          </div>
          {/* Social Network Link */}
          <div className="flex justify-center items-center space-x-4"
          onClick={(e) => e.stopPropagation()} >
            {member.instagram_url && (
                <a
                href={`http://www.instagram.com/${member.instagram_url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-120 transition-all duration-300"
                >
                <InstagramIcon colorFill="bossDark" />
                </a>
            )}
            {member.tiktok_url && (
              <a
                href={`http://www.tiktok.com/@${member.tiktok_url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-120 transition-all duration-300"
              >
                <TikTokIcon colorFill="bossDark" />
              </a>
            )}
            {
             member.youtube_url && (
              <a
                href={`http://www.youtube.com/@${member.youtube_url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-120 transition-all duration-300"
              >
                <YouTubeIcon colorFill="bossDark" />
              </a>
            ) 
            }
            {
             member.website_url && (
              <a
                href={member.website_url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-black text-bossDark transform hover:scale-120 transition-all duration-300"
              >
                <img width="24" height="24" src="./src/assets/icons/wwwIcon.png" alt="domain" className="filter-[filter: brightness(0) saturate(100%) invert(47%) sepia(16%) saturate(447%) hue-rotate(333deg) brightness(97%) contrast(90%);]"/>
              </a>
            ) 
            }
          </div>
          {/* End Social Network List */}
        </div>
      </div>
    </div>
  );
}
