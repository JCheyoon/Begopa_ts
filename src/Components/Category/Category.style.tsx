import styled from "styled-components";

export const CategoriesContainer = styled.div`
  text-align: center;
  padding: 80px 0;

  @media (min-width: 750px) {
    padding: 60px 0;
  }
`;
export const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 980px) {
    flex-wrap: nowrap;
  }
`;
