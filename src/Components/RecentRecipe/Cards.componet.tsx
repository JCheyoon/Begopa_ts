import { CardGrid } from "./Cards.style";
import Card from "./Card.component";
import { RecipeType } from "../../Context/Types";

type Props = {
  recipes: RecipeType[];
  isMyRecipe?: boolean;
};
const Cards = ({ recipes, isMyRecipe }: Props) => {
  return (
    <CardGrid>
      {recipes.map(
        ({ name, photoUrl, cookingTime, tags, id, isPublic: isPublic }) => (
          <Card
            name={name}
            photoUrl={photoUrl}
            cookingTime={cookingTime}
            tags={tags}
            id={id}
            isPublic={isPublic}
            key={id}
            isMyRecipe={isMyRecipe}
          />
        )
      )}
    </CardGrid>
  );
};

export default Cards;
