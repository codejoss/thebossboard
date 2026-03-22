import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
