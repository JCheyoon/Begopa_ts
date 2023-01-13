import { createContext, useContext, useEffect, useState } from "react";
import { useAxios } from "../Components/Hook/useAxios";
import { Recipe } from "./Types";
import { useContextAuth } from "./authContext";

type RecipeContextType = {
  fetchAllRecipes: () => Promise<void>;
  filterByName: (searchField: string) => void;
  saveNewRecipe: (
    recipeData: Recipe,
    recipeId: string | undefined
  ) => Promise<any>;
  updateRecipe: (
    recipeData: Recipe,
    recipeId: string | undefined
  ) => Promise<any>;
};

type ProviderProps = {
  children: React.ReactNode;
};

const RecipeContext = createContext({} as RecipeContextType);

export const RecipeProvider = ({ children }: ProviderProps) => {
  const { token, isLoggedIn } = useContextAuth();

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

  const saveNewRecipe = (recipeData: Recipe, recipeId: string | undefined) => {
    if (!token) return;
    return post("/recipe", recipeData, token);
  };

  const updateRecipe = (recipeData: Recipe, recipeId: string | undefined) => {
    if (!token) return;
    return put(`/recipe/${recipeId}`, recipeData, token);
  };

  const value = {
    filterByName,
    fetchAllRecipes,
    saveNewRecipe,
    updateRecipe,
  };

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};

export const useContextRecipe = () => {
  return useContext(RecipeContext);
};
