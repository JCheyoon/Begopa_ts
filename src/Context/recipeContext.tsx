import { createContext, useContext, useEffect, useState } from "react";
import { useAxios } from "../Components/Hook/useAxios";
import { Recipe } from "./Types";
import { useContextAuth } from "./authContext";

type RecipeContextType = {
  allRecipes: Recipe[];
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
  getRelatedRecipes: (tags: string[], id: string) => Recipe[];
};

type ProviderProps = {
  children: React.ReactNode;
};

function createTags(recipes) {
  const tagsOccurrence = {};
  recipes.forEach(({ tags }) => {
    tags.forEach((tag) => {
      if (!tagsOccurrence[tag]) {
        tagsOccurrence[tag] = 1;
      } else {
        tagsOccurrence[tag]++;
      }
    });
  });
  const tagsByFrequency = Object.entries(tagsOccurrence) // [[pork, 3], [tomato, 1], ...]
    .sort((a, b) => b[1] - a[1]);
  return {
    frequents: [...tagsByFrequency.slice(0, 6).map((entry) => entry[0])],
    others: [...tagsByFrequency.slice(6).map((entry) => entry[0])],
  };
}

const RecipeContext = createContext({} as RecipeContextType);

export const RecipeProvider = ({ children }: ProviderProps) => {
  const { token, isLoggedIn } = useContextAuth();
  const [myRecipes, setMyRecipes] = useState([]);
  const { post, get, put, remove } = useAxios();
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [tags, setTags] = useState({ frequents: [], others: [] });

  const fetchInitialRecipes = async () => {
    const response = await get("/recipe/list");
    if (!response?.data) return;
    setAllRecipes([...response.data]);
    setFilteredRecipes([...response.data.slice(0, 6)]);
    setTags(createTags(response.data));
  };

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

  const getRelatedRecipes = (tags: string[], id: string) => {
    const filtered = [...allRecipes, ...myRecipes].filter((recipe) => {
      return tags.some((tag) => recipe.tags.includes(tag)) && recipe.id !== id;
    });
    return filtered.slice(0, 3);
  };

  const value = {
    filterByName,
    fetchAllRecipes,
    saveNewRecipe,
    updateRecipe,
    getRelatedRecipes,
    allRecipes,
  };

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};

export const useContextRecipe = () => {
  return useContext(RecipeContext);
};
