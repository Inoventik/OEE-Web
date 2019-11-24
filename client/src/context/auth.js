import { createContext, useContext } from "react";

export const AuthContext = createContext(true);

export function useAuth() {
  return useContext(AuthContext);
}
