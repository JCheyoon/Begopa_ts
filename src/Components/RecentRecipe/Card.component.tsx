import {
  CardWrapper,
  CardImg,
  CardDescription,
  CardTime,
  IconContainer,
  DeleteButton,
  EditButton,
} from "./Card.style";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RecentRecipeType } from "../../Context/Types";
import { useContextRecipe } from "../../Context/recipeContext";
import { useContextModal } from "../../Context/modalContext";

const Card = ({
  name,
  photoUrl,
  cookingTime,
  tags,
  id,
  isMyRecipe,
  isPublic,
}: RecentRecipeType) => {
  const navigate = useNavigate();
  const { deleteRecipe, fetchMyRecipes } = useContextRecipe();
  const { showConfirmation } = useContextModal();

  const clickRemoveHandler = () => {
    showConfirmation({
      title: "Warning",
      message: "Are you sure you want to delete this recipe?",
      confirmHandler: () => removeRecipe,
    });
  };

  const removeRecipe = async () => {
    try {
      await deleteRecipe(id);
      fetchMyRecipes();
    } catch (e: any) {
      console.log("error", e.response.data.message);
    }
  };

  const goEditModeHandler = () => {
    navigate(`/edit/${id}?public=${isPublic}`);
  };

  return (
    <CardWrapper>
      <Link to={`/recipe/${id}?public=${isPublic}`}>
        <CardImg imgUrl={photoUrl} />
      </Link>

      <CardDescription>
        <Link to={`/recipe/${id}?public=${isPublic}`}>
          <h1>{name}</h1>
        </Link>
        <CardTime>
          <span className="material-symbols-outlined">timer</span>
          <h2>{cookingTime}</h2>
        </CardTime>
        {tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
        {isMyRecipe ? (
          <IconContainer>
            <EditButton onClick={goEditModeHandler}>
              <span className="material-symbols-outlined">edit</span>
            </EditButton>
            <DeleteButton onClick={clickRemoveHandler}>
              <span className="material-symbols-outlined">delete</span>
            </DeleteButton>
          </IconContainer>
        ) : null}
      </CardDescription>
    </CardWrapper>
  );
};
export default Card;
