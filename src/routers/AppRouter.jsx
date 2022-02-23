import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AuthRouter = lazy(() => import("./AuthRouter"));
const Journal = lazy(() => import("../pages/journal/Journal"));

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth/*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AuthRouter />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Journal />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
