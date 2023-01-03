import styled from "styled-components";
import { ReactComponent as LogoWithText } from "../../Assets/logoWithText.svg";

export const NavigationContainer = styled.div`
  background-color: var(--white);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  &.sticky {
    position: sticky;
  }
`;

export const LogoContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogoWithTextSvg = styled(LogoWithText)`
  width: 190px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
