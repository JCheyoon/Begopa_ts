import { createContext, useContext, useEffect, useState } from "react";
import { useAxios } from "../Components/Hook/useAxios";
import { LoginResponse, Recipe, TokenResponse } from "./Types";
import { useNavigate } from "react-router-dom";

const STORAGE_KEY = "begopa-user";
const ONE_DAY_IN_MILLIS = 1000 * 60 * 60 * 24;

type AuthContextType = {
  handleLogin: (loginResponse: LoginResponse) => void;
  handleLogout: () => void;
  isLoggedIn: boolean;
};

type ProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: ProviderProps) => {
  const { post } = useAxios();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [token, setToken] = useState<string>();
  const navigate = useNavigate();

  const handleLogin = (loginResponse: LoginResponse) => {
    const { token } = loginResponse;
    setIsLoggedIn(true);
    setToken(token);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(loginResponse));
  };

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setIsLoggedIn(false);
    setToken(undefined);
    navigate("/");
  };
  const value = {
    handleLogin,
    handleLogout,
    isLoggedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useContextAuth = () => {
  return useContext(AuthContext);
};
