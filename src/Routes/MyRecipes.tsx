import { useContextRecipe } from "../Context/recipeContext";
import { useEffect, useState } from "react";
import Spinner from "../Components/Spinner/Spinner.component";
import RecipeHeader from "../Components/RecipeItems/RecipeHeader.component";
import Footer from "../Components/Footer/Footer.component";
import ScrollUp from "../Components/ScrollUp/ScrollUp.component";
import { Page } from "../Components/Page/Page.style";
import Cards from "../Components/RecentRecipe/Cards.componet";
import { useContextAuth } from "../Context/authContext";
import NoMyRecipes from "../Components/NoMyRecipes/NoMyRecipes.component";
import { useContextModal } from "../Context/modalContext";

const MyRecipes = () => {
  const { myRecipes, fetchMyRecipes } = useContextRecipe();
  const { isLoggedIn } = useContextAuth();
  const [loading, setLoading] = useState<boolean>(true);
  const { showModalHandler } = useContextModal();

  const viewMyRecipes = async () => {
    setLoading(true);

    try {
      await fetchMyRecipes();
    } catch (e: any) {
      showModalHandler({
        title: "Error",
        message: "Could not fetch my recipes",
      });
      console.log(e.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      viewMyRecipes();
    }
  }, [isLoggedIn]);

  if (loading) return <Spinner />;

  return (
    <Page>
      <RecipeHeader name="My recipes" />
      {myRecipes.length <= 0 ? (
        <NoMyRecipes />
      ) : (
        <Cards recipes={myRecipes} isMyRecipe={true} />
      )}
      <Footer />
      <ScrollUp />
    </Page>
  );
};

export default MyRecipes;
