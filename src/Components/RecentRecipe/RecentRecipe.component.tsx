import { Button } from "../Page/Page.style";
import { useState } from "react";
import { useContextRecipe } from "../../Context/recipeContext";
import Cards from "./Cards.componet";
import { RecentRecipesContainer } from "./RecentRecipe.style";
import { useContextModal } from "../../Context/modalContext";
const recipeTitles = {
  recent: "Recent Recipes",
  all: "All Recipes",
  results: "Search Results",
};

const BrowseRecipes = () => {
  const { allRecipes, filteredRecipes, fetchAllRecipes } = useContextRecipe();
  const [title, setTitle] = useState<string>(recipeTitles.recent);
  const { showModalHandler } = useContextModal();
  const viewAllRecipes = async () => {
    try {
      await fetchAllRecipes();
    } catch (e: any) {
      showModalHandler({
        title: "Error",
        message: "Could not fetch all recipe",
      });

      console.log(e.response.data.message);
    }
    setTitle(recipeTitles.all);
  };

  return (
    <RecentRecipesContainer>
      <h3>Browse Recipes</h3>
      <h1>{title}</h1>
      <Cards recipes={filteredRecipes} />
      {allRecipes.length !== filteredRecipes.length ? (
        <Button onClick={viewAllRecipes}>View All Recipes</Button>
      ) : null}
    </RecentRecipesContainer>
  );
};
export default BrowseRecipes;
