import { Link } from "react-router";
import logoUrl from "../../assets/img/BossBoard-white.png";

export const Header = () => {
  return (
    <div className="bg-bossDark border-b border-stone-500/20 py-4">
      <div className="container mx-auto text-center">
        <Link to={"/"}>
          <img
            className="inline h-30"
            src={logoUrl}
            alt="logo for The BossBoard"
          />
        </Link>
      </div>
    </div>
  );
};
