import { HeaderContainer } from "./RecipeHeader.style";

type Props = {
  name: string;
};
const RecipeHeader = ({ name }: Props) => {
  return (
    <HeaderContainer>
      <h1>{name}</h1>
    </HeaderContainer>
  );
};
export default RecipeHeader;
