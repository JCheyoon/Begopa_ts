import { createContext, useContext, useEffect, useState } from "react";
import { useAxios } from "../Components/Hook/useAxios";
import { Recipe } from "./RecipeType";

type AuthContextType = {};

type ProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: ProviderProps) => {
  const value = {};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useContextAuth = () => {
  return useContext(AuthContext);
};
