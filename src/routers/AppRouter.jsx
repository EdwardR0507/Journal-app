import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/firebaseConfig";
import Loader from "../components/Loader";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";

const AuthRouter = lazy(() => import("./AuthRouter"));
const Journal = lazy(() => import("../pages/Journal"));
const PublicRouter = lazy(() => import("./PublicRouter"));
const PrivateRouter = lazy(() => import("./PrivateRouter"));

const auth = getAuth(app);

export const AppRouter = () => {
  const dispatch = useDispatch();
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, [dispatch, setIsAuth]);

  console.log("isAuth in router:", isAuth);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/auth/*"
            element={
              <PublicRouter isAuth={isAuth}>
                <AuthRouter />
              </PublicRouter>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRouter isAuth={isAuth}>
                <Journal />
              </PrivateRouter>
            }
          />
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
