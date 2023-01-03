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

interface props {
  recipeName: string;
  imgUrl: string;
  time: string;
  tags: string;
  recipeId: string;
  isMyRecipe: boolean;
  isPublic: boolean;
}
const Card = ({
  recipeName,
  imgUrl,
  time,
  tags,
  recipeId,
  isMyRecipe,
  isPublic,
}: props) => {
  const navigate = useNavigate();

  const clickRemoveHandler = () => {
    console.log("remove");
    // showConfirmation({
    //   title: "Warning",
    //   message: "Are you sure you want to delete this recipe?",
    //   confirmHandler: () => removeRecipe,
    // });
  };

  // const removeRecipe = async () => {
  //   try {
  //     await deleteRecipe(recipeId);
  //     fetchMyRecipes();
  //   } catch (e) {
  //     console.log("error", e.response.data.message);
  //   }
  // };

  const goEditModeHandler = () => {
    navigate(`/edit/${recipeId}?public=${isPublic}`);
  };

  return (
    <CardWrapper>
      <Link to={`/recipe/${recipeId}?public=${isPublic}`}>
        <CardImg imgUrl={imgUrl} />
      </Link>

      <CardDescription>
        <Link to={`/recipe/${recipeId}?public=${isPublic}`}>
          <h1>{recipeName}</h1>
        </Link>
        <CardTime>
          <span className="material-symbols-outlined">timer</span>
          <h2>{time}</h2>
        </CardTime>
        {/*{tags.map((tag) => (*/}
        {/*  <span className="tag" key={tag}>*/}
        {/*    {tag}*/}
        {/*  </span>*/}
        {/*))}*/}
        {/*{isMyRecipe === true ? (*/}
        {/*  <IconContainer>*/}
        {/*    <EditButton onClick={goEditModeHandler}>*/}
        {/*      <span className="material-symbols-outlined">edit</span>*/}
        {/*    </EditButton>*/}
        {/*    <DeleteButton onClick={clickRemoveHandler}>*/}
        {/*      <span className="material-symbols-outlined">delete</span>*/}
        {/*    </DeleteButton>*/}
        {/*  </IconContainer>*/}
        {/*) : null}*/}
      </CardDescription>
    </CardWrapper>
  );
};
export default Card;
