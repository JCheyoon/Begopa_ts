import { RecentRecipesContainer } from "./RecentRecipe.style";
import { useState } from "react";
import { Button } from "../Page/Page.style";
import Cards from "./Cards.componet";

const recipeTitles = {
  recent: "Recent Recipes",
  all: "All Recipes",
  results: "Search Results",
};

const RecentRecipe = () => {
  const [title, setTitle] = useState<string>(recipeTitles.recent);

  return (
    <RecentRecipesContainer>
      <h3>Browse Recipes</h3>
      <h1>{title}</h1>
      {/*<Cards recipes={filteredRecipes} />*/}
      {/*{allRecipes.length !== filteredRecipes.length ? (*/}
      {/*  <Button onClick={viewAllRecipes}>View All Recipes</Button>*/}
      {/*) : null}*/}
    </RecentRecipesContainer>
  );
};
export default RecentRecipe;
