//this page is used for protecting the admin database|V|
// it will not allow any ranodom access
import { Navigate } from "react-router-dom";
import  useAuth  from "../hooks/useAuth";

const ProtectedRoute = ({ children, adminOnly }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && !user.isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
