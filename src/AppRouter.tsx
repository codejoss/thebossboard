import { HashRouter, Navigate, Route, Routes } from "react-router";
import { BossBoardPage } from "./pages/BossBoardPage";
import { Notfound404Page } from "./pages/Notfound404Page";
import MainLayout from "./components/layout/MainLayout";
import { RankingStars } from "./pages/RankingStars";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/thebossboard" element={<MainLayout />}>
          <Route index element={<BossBoardPage />} />
          <Route path="rankingstars" element={<RankingStars />} />
        </Route>
        <Route path="/" element={<Navigate to="/thebossboard" />} />
        <Route
          path="/rankingstars"
          element={<Navigate to="/thebossboard/" />}
        />
        <Route path="*" element={<Notfound404Page />} />
      </Routes>
    </HashRouter>
  );
};
