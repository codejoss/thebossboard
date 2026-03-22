import { Link } from "react-router";

export const Notfound404Page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-bossDark mb-4 text-6xl font-bold">404</h1>
        <h2 className="text-bossDark mb-2 text-2xl font-semibold">
          Página No Encontrada
        </h2>
        <p className="text-bossDark mb-8">
          Lo sentimos, la página que estás buscando no existe.
        </p>
        <Link
          to="/"
          className="bg-bossPink border-bossPink hover:text-bossPink rounded-lg border-2 px-6 py-3 font-bold text-white transition-all duration-300 hover:bg-white"
        >
          Ir al Inicio
        </Link>
      </div>
    </div>
  );
};
