import {
  ArrowButton,
  CookingTime,
  DescriptionContainer,
  Ingredient,
  InstructionsContainer,
  MainSection,
  Photo,
  RecipeItemCategoriesContainer,
  RecipeItemsContainer,
  RecipeItemsSection,
  ServingInput,
  Time,
} from "./RecipeItems.style";
import { useState } from "react";
import { Recipe } from "../../Context/Types";
import RelatedRecipes from "./RelatedRecipes.component";

const RecipeItems = ({
  cookingTime,
  updatedAt,
  instructions,
  photoUrl,
  ingredients,
  servings,
  tags,
  id,
}: Recipe) => {
  const [servingValue, setServingValue] = useState(servings);
  const [multiplier, setMultiplier] = useState(1);

  const changeCreateTime = (string: string) => {
    const date = new Date(string);
    return date.toLocaleDateString();
  };
  const increaseAmount = () => {
    const newServings = servingValue + 1;
    setServingValue(newServings);
    setMultiplier(newServings / servings);
  };

  const decreaseAmount = () => {
    const newServings = servingValue - 1;
    if (newServings === 0) return;
    setMultiplier(newServings / servings);
    setServingValue(newServings);
  };
  return (
    <RecipeItemsContainer>
      <RecipeItemsSection>
        <MainSection>
          <CookingTime>
            <Time>
              <span className="material-symbols-outlined">timer</span>
              <span>{cookingTime}</span>
            </Time>
            <h2>{changeCreateTime(updatedAt)}</h2>
          </CookingTime>
          <Photo photoUrl={photoUrl} />
          <InstructionsContainer>
            <h1>Ingredients</h1>
            <span>Adjust Servings</span>
            <ArrowButton onClick={decreaseAmount}> &#10094;</ArrowButton>
            <ServingInput>
              <span>{servingValue}</span>
            </ServingInput>
            <ArrowButton onClick={increaseAmount}>&#10095;</ArrowButton>
            {ingredients.map(({ amount, unit, material }) => (
              <Ingredient key={material}>
                <span>{Math.round(amount * multiplier * 100) / 100}</span>
                <span>{unit}</span>
                <span>{material}</span>
              </Ingredient>
            ))}
            <DescriptionContainer>
              <h1>Directions</h1>
              <p>{instructions}</p>
            </DescriptionContainer>
          </InstructionsContainer>
          <RecipeItemCategoriesContainer>
            <h2>Category</h2>
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </RecipeItemCategoriesContainer>
        </MainSection>
        <div>
          <RelatedRecipes tags={tags} id={id} />
        </div>
      </RecipeItemsSection>
    </RecipeItemsContainer>
  );
};

export default RecipeItems;
