import { HiExternalLink } from "react-icons/hi";
interface ButtonBossRoomVIPProps {
  textButton?: string;
  className?: string;
}

const buttonText = "¡Quiero entrar!";

export function ButtonBossRoomVIP({
  textButton = buttonText,
  className = "",
}: ButtonBossRoomVIPProps) {
  return (
    <div>
      <a
        href="https://www.andreacazarin.com/thebossroomvip"
        target="_blank"
        rel="noopener noreferrer"
        className={`center border-bossPink bg-bossPink hover:text-bossDark hover:border-bossDark flex w-max items-center justify-between gap-2 rounded-2xl border-2 px-10 py-6 text-center text-2xl font-extrabold text-wrap text-black/50 transition-all duration-300 hover:bg-white focus:ring-4 focus:ring-pink-300 focus:outline-none sm:w-max sm:py-4 md:mr-0 dark:focus:ring-pink-800 ${className}`}
      >
        {textButton}
        <HiExternalLink size={24} />
      </a>
    </div>
  );
}
