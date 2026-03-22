import { Banner } from "../components/shared/Banner/Banner.tsx";
import { Cardsgrid } from "../components/shared/Cardsgrid/index.ts";
import { ButtonBossRoomVIP } from "../components/ui/ButtonBossRoomVIP.tsx";

export const BossBoardPage = () => {
  return (
    <div>
      <p className="animate-slide-up bg-bossDark m-0 pb-6 text-center text-xl font-bold text-balance text-white">
        Conoce a las jefas increíbles que forman parte de nuestra comunidad
      </p>
      <Banner>
        <ButtonBossRoomVIP textButton="¡Quiero Entrar!" className="mt-10" />
      </Banner>
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
