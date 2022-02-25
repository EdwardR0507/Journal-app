import { lazy } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));

const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
      </div>
    </div>
  );
};
export default AuthRouter;
