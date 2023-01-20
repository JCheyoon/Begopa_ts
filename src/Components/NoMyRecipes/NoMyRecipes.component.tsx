import {
  NoMyRecipesContainer,
  NoMyRecipesIconContainer,
} from "./NoMyRecipes.style";
import { Button } from "../Page/Page.style";
import { useNavigate } from "react-router-dom";

const NoMyRecipes = () => {
  const navigate = useNavigate();

  const goToSubmit = () => {
    navigate("/submit");
  };

  return (
    <NoMyRecipesContainer>
      <NoMyRecipesIconContainer>
        <span className="material-symbols-outlined">
          sentiment_dissatisfied
        </span>
        <h1>You don't have a recipe!</h1>
        <h3>Please create new recipe for Cheyoon.</h3>
      </NoMyRecipesIconContainer>

      <Button onClick={goToSubmit}>Submit Recipe</Button>
    </NoMyRecipesContainer>
  );
};
export default NoMyRecipes;
