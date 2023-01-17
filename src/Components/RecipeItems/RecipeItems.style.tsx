import styled from "styled-components";

export const RecipeItemsContainer = styled.div`
  width: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) {
    width: 100%;
  }
`;

export const RecipeItemsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin-left: 0;
  align-items: center;

  @media (min-width: 750px) {
    margin-left: 20px;
    align-items: normal;
  }
  @media (min-width: 980px) {
    margin-left: 90px;
    padding: 40px;
  }
`;

export const MainSection = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    width: 530px;
  }
  @media (min-width: 750px) {
    width: 730px;
  }
  @media (min-width: 980px) {
    width: 930px;
  }
`;

export const CookingTime = styled.div`
  background-color: var(--light-gray);
  height: 100px;
  margin-top: 10px;
  margin-right: 0;
  margin-left: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 600px) {
    margin-left: 0;
    margin-right: 30px;
  }
  span {
    font-size: 30px;
    padding-left: 20px;
    font-weight: normal;
  }
  h2 {
    padding-right: 20px;
    padding-top: 50px;
    font-weight: bold;
    font-size: 18px;
  }
`;
export const Time = styled.div`
  display: flex;
  align-items: center;
`;

export const Photo = styled.div<{ photoUrl: string }>`
  background-size: cover;
  background-position: center;
  background-image: ${({ photoUrl }) => `url(${photoUrl})`};
  width: 345px;
  height: 500px;
  margin-top: 30px;
  margin-right: 0;
  margin-left: 15px;
  @media (min-width: 600px) {
    width: 500px;
    margin-right: 30px;
    margin-left: 0;
  }
  @media (min-width: 750px) {
    width: 700px;
  }
  @media (min-width: 980px) {
    width: 900px;
  }
`;

export const InstructionsContainer = styled.div`
  width: 330px;
  border-top: 1px solid var(--light-gray);
  margin: 30px 0;
  padding-left: 15px;
  @media (min-width: 600px) {
    width: 500px;
    padding-left: 0;
  }
  @media (min-width: 750px) {
    width: 700px;
  }
  @media (min-width: 980px) {
    width: 900px;
  }
  h1 {
    margin: 10px 0;
    padding: 0;
    font-size: 44px;
    font-weight: 600;
  }
  span {
    margin: 5px 0;
    font-size: 20px;
  }
  p {
    font-size: 20px;
    white-space: pre-wrap;
  }
`;

export const ServingInput = styled.span`
  width: 60px;
  height: 30px;
  span {
    font-family: "Barlow", sans-serif;
    color: var(--light-black);
    font-size: 18px;
  }
`;

export const Ingredient = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template: repeat(1, 30px) / 70px 160px 160px;
`;
export const DescriptionContainer = styled.div`
  width: 330px;
  border-top: 1px solid var(--light-gray);
  margin: 30px 0;
  @media (min-width: 600px) {
    width: 500px;
  }
  @media (min-width: 750px) {
    width: 700px;
  }
  @media (min-width: 980px) {
    width: 900px;
  }
`;
export const RecipeItemCategoriesContainer = styled.div`
  width: 330px;
  border-top: 1px solid var(--light-gray);
  margin: 30px 0;
  padding-left: 15px;
  @media (min-width: 600px) {
    width: 500px;
    padding-left: 0;
  }
  @media (min-width: 750px) {
    width: 700px;
  }
  @media (min-width: 980px) {
    width: 900px;
  }
  span {
    margin: 5px 0;
    padding-right: 10px;
    font-size: 20px;
  }
`;

export const ArrowButton = styled.button`
  cursor: pointer;
  text-decoration: none;
  background: none;
  border: none;
  font-size: 18px;
`;
