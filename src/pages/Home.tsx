import MainLayout from "../components/layout/MainLayout.tsx";
import { Banner } from "../components/shared/Banner/Banner.tsx";
import { Cardsgrid } from "../components/shared/Cardsgrid/index.ts";
import { ButtonBossRoomVIP } from "../components/ui/ButtonBossRoomVIP.tsx";

const Home = () => {
  return (
    <MainLayout>
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
    </MainLayout>
  );
};

export default Home;
