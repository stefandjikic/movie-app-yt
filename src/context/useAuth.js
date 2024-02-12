import { useContext } from "react";
import { AuthContext } from "./authProvider";

export const useAuth = () => useContext(AuthContext);