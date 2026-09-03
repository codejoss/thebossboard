import { lazy, Suspense } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router";
import { Notfound404Page } from "./pages/Notfound404Page";
import MainLayout from "./components/layout/MainLayout";

const BossBoardPage = lazy(() =>
  import("./pages/BossBoardPage").then((module) => ({
    default: module.BossBoardPage,
  })),
);
const RankingStars = lazy(() =>
  import("./pages/RankingStars").then((module) => ({
    default: module.RankingStars,
  })),
);

export const AppRouter = () => {
  return (
    <HashRouter>
      <Suspense fallback={<p className="p-8 text-center">Cargando…</p>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<BossBoardPage />} />
            <Route path="ranking" element={<RankingStars />} />
          </Route>
          <Route path="/thebossboard" element={<Navigate to="/" replace />} />
          <Route
            path="/thebossboard/ranking"
            element={<Navigate to="/ranking" replace />}
          />
          <Route path="*" element={<Notfound404Page />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};
