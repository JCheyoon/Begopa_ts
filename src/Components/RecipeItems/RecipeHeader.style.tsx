import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 200px;
  background-image: url("/pattern-dark.jpg");
  background-repeat: repeat;
  color: var(--white);
  display: flex;
  align-items: center;
  margin-top: 85px;
  h1 {
    padding: 0 40px;
    font-size: 38px;
    font-weight: 800;
  }
  @media (min-width: 750px) {
    margin-top: 0;
  }
`;
