import { Link } from "react-router";
import logoUrl from "../../assets/img/BossBoard-white.png";

export const Header = () => {
  const simulatorUrl = `${import.meta.env.BASE_URL}simuladorComisiones.html`;

  return (
    <>
      <header className="bg-bossDark h-32 w-full border-b border-stone-500/20 shadow-lg md:fixed md:inset-x-0 md:top-0 md:z-[100]">
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-2 px-3 sm:gap-6 sm:px-6">
          <Link to="/" className="shrink-0" aria-label="Ir al inicio">
            <img
              className="h-24 w-auto object-contain sm:h-28"
              src={logoUrl}
              alt="The Boss Board"
            />
          </Link>

          <nav
            aria-label="Navegación principal"
            className="flex shrink-0 items-center gap-1 rounded-xl bg-white/10 p-1 sm:gap-2"
          >
            <Link
              to="/ranking"
              className="rounded-lg px-2 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/15 sm:px-4 sm:text-sm"
            >
              Ranking
            </Link>
            <a
              href={simulatorUrl}
              className="bg-bossPink text-bossDark rounded-lg px-2 py-2 text-xs font-bold transition-colors hover:bg-pink-200 sm:px-4 sm:text-sm"
            >
              <span className="sm:hidden">Simulador</span>
              <span className="hidden sm:inline">Simulador de comisiones</span>
            </a>
          </nav>
        </div>
      </header>
      <div className="hidden h-32 shrink-0 md:block" aria-hidden="true" />
    </>
  );
};
