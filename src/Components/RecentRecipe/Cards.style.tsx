import styled from "styled-components";

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 400px);
  justify-content: center;
  align-items: center;
  grid-gap: 15px;
  padding: 2.5rem 0 1rem;

  @media (min-width: 790px) {
    grid-template-columns: repeat(2, 400px);
  }
  @media (min-width: 980px) {
    grid-template-columns: repeat(2, 400px);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 400px);
  }
`;
