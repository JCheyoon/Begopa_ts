import { Page } from "../Components/Page/Page.style";
import Category from "../Components/Category/Category.component";
import RecentRecipe from "../Components/RecentRecipe/RecentRecipe.component";
import Footer from "../Components/Footer/Footer.component";
import ScrollUp from "../Components/ScrollUp/ScrollUp.component";
import { useContextRecipe } from "../Context/recipeContext";
import { useEffect, useState } from "react";
import Spinner from "../Components/Spinner/Spinner.component";

const Home = () => {
  const { fetchInitialRecipes } = useContextRecipe();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRecents();
  }, []);

  const fetchRecents = async () => {
    setLoading(true);
    try {
      await fetchInitialRecipes();
    } catch (e: any) {
      console.log(e.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <Spinner />;

  return (
    <Page>
      <Category />
      <RecentRecipe />
      <Footer />
      <ScrollUp />
    </Page>
  );
};

export default Home;
