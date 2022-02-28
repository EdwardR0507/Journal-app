import { Navigate } from "react-router-dom";
const PrivateRouter = ({ isAuth, children }) => {
  return isAuth ? children : <Navigate to="login" />;
};
export default PrivateRouter;
