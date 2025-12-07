import MainLayout from "../component/layout/MainLayout.tsx";
import { Banner } from "../component/shared/Banner/Banner.tsx";
import { Cardsgrid } from "../component/shared/Cardsgrid";
import { ButtonBossRoomVIP } from "../component/ui/ButtonBossRoomVIP.tsx";

const Home = () => {
  return (
    <MainLayout>
      <Banner>
        <ButtonBossRoomVIP />
      </Banner>
      <Cardsgrid />
    </MainLayout>
  );
};

export default Home;
