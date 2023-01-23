import RecipeItems from "../Components/RecipeItems/RecipeItems.component";
import ScrollUp from "../Components/ScrollUp/ScrollUp.component";
import { Page } from "../Components/Page/Page.style";
import { useLocation, useParams } from "react-router-dom";
import { useContextRecipe } from "../Context/recipeContext";
import { useAxios } from "../Components/Hook/useAxios";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer.component";
import { useContextAuth } from "../Context/authContext";
import RecipeHeader from "../Components/RecipeItems/RecipeHeader.component";
import Spinner from "../Components/Spinner/Spinner.component";
import { RecipeType } from "../Context/Types";
import { useContextModal } from "../Context/modalContext";

const Recipe = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const { get } = useAxios();
  const { allRecipes, fetchInitialRecipes } = useContextRecipe();
  const { token } = useContextAuth();
  const [recipe, setRecipe] = useState<RecipeType>();
  const [loading, setLoading] = useState(false);
  const { showModalHandler } = useContextModal();

  useEffect(() => {
    if (!id) return;
    if (!allRecipes.length) {
      fetchInitialRecipes();
    }
    const query = new URLSearchParams(search);
    const isPublic = query.get("public") === "true";
    fetchRecipe(id, isPublic);
  }, [id, token]);

  const fetchRecipe = async (id: String, isPublic: Boolean) => {
    setLoading(true);
    try {
      const response = await get(
        `/recipe/${isPublic ? "" : "private/"}${id}`,
        token
      );
      setRecipe(response.data);
    } catch (e: any) {
      showModalHandler({ title: "Error", message: "Could not fetch recipe" });
      console.log(e.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Spinner />;

  if (!recipe) return null;

  return (
    <Page>
      <RecipeHeader name={recipe.name} />
      <RecipeItems
        name={recipe.name}
        cookingTime={recipe.cookingTime}
        updatedAt={recipe.updatedAt}
        instructions={recipe.instructions}
        photoUrl={recipe.photoUrl}
        ingredients={recipe.ingredients}
        tags={recipe.tags}
        servings={recipe.servings}
        id={recipe.id}
      />
      <Footer />
      <ScrollUp />
    </Page>
  );
};
export default Recipe;
