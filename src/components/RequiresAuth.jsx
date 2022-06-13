import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Helper/Auth/auth-context";
const RequiresAuth = ({ children }) => {
  const {
    userState: { token },
  } = useAuth();
  const navigate = useLocation();
  return (
    <>
      {token ? (
        children
      ) : (
        <Navigate to="/login" state={{ from: navigate }} replace />
      )}
    </>
  );
};

export { RequiresAuth };
