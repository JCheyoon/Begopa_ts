import styled from "styled-components";

export const RelatedRecipeContainer = styled.div`
  width: 330px;
  background-color: var(--light-gray);
  margin-top: 10px;
  padding: 30px 50px;
  margin-left: 15px;
  margin-bottom: 15px;
  @media (min-width: 600px) {
    width: 400px;
    margin-left: 0;
    margin-bottom: 0;
  }
  h1 {
    padding-bottom: 10px;
  }
`;
export const RelatedRecipe = styled.div`
  width: 230px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px 0;
  border-bottom: 2px solid var(--light-black);
  @media (min-width: 600px) {
    width: 300px;
  }
  span {
    font-weight: bold;
    &:hover {
      color: var(--dark-orange);
    }
  }
`;

export const RelateRecipePic = styled.div<{ photoUrl: string }>`
  background-color: brown;
  width: 70px;
  height: 70px;
  margin-right: 20px;
  background-size: cover;
  background-position: center;
  background-image: ${({ photoUrl }) => `url(${photoUrl})`};
  transition: all 200ms ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

export const NoRelatedRecipeContainer = styled.div`
  display: flex;
  align-items: center;
  span {
    font-weight: lighter;
    font-size: 100px;
    color: var(--light-black);
    padding-right: 10px;
    &:hover {
      color: var(--light-black);
    }
  }
  h3 {
    font-family: "Barlow", sans-serif;
    color: var(--light-black);
    padding-top: 0;
    font-weight: normal;
  }
`;
