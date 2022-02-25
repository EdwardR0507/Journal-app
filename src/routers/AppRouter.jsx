import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Loader from "../components/Loader";

const AuthRouter = lazy(() => import("./AuthRouter"));
const Journal = lazy(() => import("../pages/journal/Journal"));

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/auth/*" element={<AuthRouter />} />
          <Route path="/" element={<Journal />} />
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
