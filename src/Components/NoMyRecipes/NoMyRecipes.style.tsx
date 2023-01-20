import styled from "styled-components";

export const NoMyRecipesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  button {
    margin-bottom: 40px;
  }
`;

export const NoMyRecipesIconContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  span {
    font-size: 200px;
    color: var(--light-black);
  }
  h1 {
    margin-top: 20px;
    color: var(--light-black);
    padding-bottom: 0;
  }
  h3 {
    font-size: 18px;
    font-family: "Barlow", sans-serif;
    padding: 5px 0;
    color: var(--dark-gray);
  }
`;
