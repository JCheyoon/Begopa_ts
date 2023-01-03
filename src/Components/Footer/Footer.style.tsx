import styled from "styled-components";
import { ReactComponent as LinkIn } from "../../Assets/linkdin.svg";
import { ReactComponent as Github } from "../../Assets/github.svg";

export const FooterContainer = styled.div`
  height: 300px;
  background-color: var(--dark-gray);
  color: var(--gray);
  text-align: center;

  h1 {
    padding-top: 40px;
    font-size: 18px;
    font-weight: lighter;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
`;
export const FooterLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  width: 50px;
  height: 50px;
  margin: 10px;
  cursor: pointer;

  &:hover {
    color: var(--dark-orange);
  }
`;
export const LinkedinLogo = styled(LinkIn)`
  width: 30px;
  height: 30px;
`;
export const GithubLogo = styled(Github)`
  width: 32px;
  height: 32px;
`;
