import { createContext, useContext, useReducer } from "react";
import { authReducer, initialState } from "./auth-reducer";

const AuthContext = createContext(null);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [userState, dispatchUserState] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ userState, dispatchUserState }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
