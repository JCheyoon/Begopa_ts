import { createContext, useContext, useEffect, useState } from "react";
import { useAxios } from "../Components/Hook/useAxios";
import { MyRecipeType, RecipeType, Tags } from "./Types";
import { useContextAuth } from "./authContext";

type RecipeContextType = {
  tags: Tags;
  allRecipes: RecipeType[];
  fetchAllRecipes: () => Promise<void>;
  filterByName: (searchField: string) => void;
  saveNewRecipe: (
    recipeData: RecipeType,
    recipeId: string | undefined
  ) => Promise<any>;
  updateRecipe: (
    recipeData: RecipeType,
    recipeId: string | undefined
  ) => Promise<any>;
  getRelatedRecipes: (tags: string[], id: string) => RecipeType[];
  fetchInitialRecipes: () => Promise<void>;
  filterByTag: (tag: string) => void;
  filteredRecipes: RecipeType[];
  deleteRecipe: (id: string, token?: string) => Promise<any>;
  fetchMyRecipes: () => Promise<void>;
};

type ProviderProps = {
  children: React.ReactNode;
};

// const a: Record<string, number> = {
//   asd: 1,
//   dsa: 322,
//   fasd: true,
// }

function createTags(recipes: RecipeType[]) {
  const tagsOccurrence: Record<string, number> = {};

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
  const [myRecipes, setMyRecipes] = useState<MyRecipeType[]>([]);
  const { post, get, put, remove } = useAxios();
  const [allRecipes, setAllRecipes] = useState<RecipeType[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<RecipeType[]>([]);
  const [tags, setTags] = useState<Tags>({
    frequents: [],
    others: [],
  });

  useEffect(() => {
    if (!isLoggedIn) {
      setMyRecipes([]);
    }
  }, [isLoggedIn]);

  const fetchInitialRecipes = async () => {
    const response = await get("/recipe/list");
    if (!response?.data) return;
    setAllRecipes([...response.data]);
    setFilteredRecipes([...response.data.slice(0, 6)]);
    setTags(createTags(response.data));
  };

  const fetchMyRecipes = async () => {
    const response = await get("/recipe/my-list", token);
    if (!response?.data) return;
    setMyRecipes([...response.data]);
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

  const deleteRecipe = (id: string, token?: string) => {
    if (!token) return;
    return remove(`/recipe/${id}`, token);
  };

  const saveNewRecipe = (
    recipeData: RecipeType,
    recipeId: string | undefined
  ) => {
    if (!token) return;
    return post("/recipe", recipeData, token);
  };

  const updateRecipe = (
    recipeData: RecipeType,
    recipeId: string | undefined
  ) => {
    if (!token) return;
    return put(`/recipe/${recipeId}`, recipeData, token);
  };

  const getRelatedRecipes = (tags: string[], id: string) => {
    const filtered = [...allRecipes, ...myRecipes].filter((recipe) => {
      return tags.some((tag) => recipe.tags.includes(tag)) && recipe.id !== id;
    });
    return filtered.slice(0, 3);
  };

  const filterByTag = (tag: string) => {
    const filtered = allRecipes.filter((recipe) => {
      return recipe.tags.includes(tag);
    });
    setFilteredRecipes(filtered);
  };

  const value = {
    filterByName,
    fetchAllRecipes,
    saveNewRecipe,
    updateRecipe,
    getRelatedRecipes,
    allRecipes,
    fetchInitialRecipes,
    tags,
    filterByTag,
    filteredRecipes,
    deleteRecipe,
    fetchMyRecipes,
  };

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};

export const useContextRecipe = () => {
  return useContext(RecipeContext);
};
