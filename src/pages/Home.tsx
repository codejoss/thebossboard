import MainLayout from "../component/layout/MainLayout.tsx";
import { Banner } from "../component/shared/Banner/Banner.tsx";
import { Cardsgrid } from "../component/shared/Cardsgrid";
import { ButtonBossRoomVIP } from "../component/ui/ButtonBossRoomVIP.tsx";

const Home = () => {
  return (
    <MainLayout>
      <Banner>
        <ButtonBossRoomVIP textButton="¡Quiero Entrar!" className="mt-10" />
      </Banner>
      <Cardsgrid />
      <Banner>
        <ButtonBossRoomVIP textButton="Unirme a la comunidad" className="mb-10" />
      </Banner>
    </MainLayout>
  );
};

export default Home;
