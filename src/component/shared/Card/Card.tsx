import type { Person } from "../../../types/person";

interface CardProps {
  person: Person;
  onClick: () => void;
}

export function Card({ person, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className="group translate-y-8 cursor-pointer rounded-2xl border border-stone-200 bg-gradient-to-br from-stone-50 to-stone-100 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      {/* <!-- Profile Photo --> */}
      <div className="mb-4 flex justify-center">
        <img
          src={person.profileImage}
          alt={person.name}
          className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-lg transition-transform duration-300 group-hover:shadow-xl"
        />
      </div>

      {/* <!-- Card Info --> */}
      <div className="flex flex-1 flex-col justify-between text-center">
        <div>
          {/* Name */}
          <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-stone-800 capitalize">
            {person.name}
          </h3>
          {/* Location */}
          <p className="mb-5 text-sm font-bold text-stone-500">
            {person.city_country}
          </p>
        </div>
        <div className="space-y-3">
          {/* Profesion */}
          <div className="rounded-full bg-gradient-to-r from-[#968279] to-bossDark px-3 py-2 text-sm font-semibold text-white shadow-md">
            {person.carrer}
          </div>
          {/* Social Network Link */}
          <a
            href={person.socialNetwork}
            className="inline-flex w-full items-center justify-center rounded-full border border-stone-300/50 bg-stone-200/80 px-4 py-2 text-sm font-bold text-stone-700 backdrop-blur-sm transition-all duration-200 hover:bg-stone-200 hover:shadow-md"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            Ver perfil
          </a>
        </div>
      </div>
    </div>
  );
}
