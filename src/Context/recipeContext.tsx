import { createContext, useContext, useEffect, useState } from "react";
import { useAxios } from "../Components/Hook/useAxios";
import { Recipe } from "./Types";

type RecipeContextType = {
  fetchAllRecipes: () => Promise<void>;
  filterByName: (searchField: string) => void;
};

type ProviderProps = {
  children: React.ReactNode;
};

const RecipeContext = createContext({} as RecipeContextType);

export const RecipeProvider = ({ children }: ProviderProps) => {
  const { post, get, put, remove } = useAxios();
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);

  const fetchAllRecipes = async () => {
    setFilteredRecipes([...allRecipes]);
  };
  const filterByName = (searchField: string) => {
    if (searchField === "") {
      setFilteredRecipes([...allRecipes]);
      return;
    }
    const filtered = allRecipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(searchField);
    });
    setFilteredRecipes(filtered);
  };

  const value = {
    filterByName,
    fetchAllRecipes,
  };

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};

export const useContextRecipe = () => {
  return useContext(RecipeContext);
};
