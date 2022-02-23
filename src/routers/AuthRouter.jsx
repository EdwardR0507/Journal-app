import { lazy, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));

const AuthRouter = () => {
  return (
    <Routes>
      <Route
        path="login"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="register"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Register />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
export default AuthRouter;
