import { Navigate } from "react-router";
const PublicRouter = ({ isAuth, children }) => {
  return !isAuth ? children : <Navigate to="/" />;
};
export default PublicRouter;
