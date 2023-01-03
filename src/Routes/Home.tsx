import { Page } from "../Components/Page/Page.style";
import Category from "../Components/Category/Category.component";
import RecentRecipe from "../Components/RecentRecipe/RecentRecipe.component";
import Footer from "../Components/Footer/Footer.component";
import ScrollUp from "../Components/ScrollUp/ScrollUp.component";
import Navigation from "../Components/Navigation/Navigation.component";

const Home = () => {
  return (
    <Page>
      <Navigation />
      <Category />
      <RecentRecipe />
      <Footer />
      <ScrollUp />
    </Page>
  );
};

export default Home;
