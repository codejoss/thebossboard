import { Banner } from "../components/shared/Banner/Banner.tsx";
import { Cardsgrid } from "../components/shared/Cardsgrid/index.ts";
import { ButtonBossRoomVIP } from "../components/ui/ButtonBossRoomVIP.tsx";

export const BossBoardPage = () => {
  return (
    <div>
      <Banner>
        <ButtonBossRoomVIP textButton="¡Quiero Entrar!" className="mt-10" />
      </Banner>
      <p className="animate-slide-up text-bossDark m-0 px-4 py-6 text-center text-2xl font-bold text-balance md:text-3xl">
        Conoce a las jefas increíbles que forman parte de nuestra comunidad
      </p>
      <Cardsgrid />
      <Banner>
        <ButtonBossRoomVIP
          textButton="Unirme a la comunidad"
          className="mb-10"
        />
      </Banner>
    </div>
  );
};
