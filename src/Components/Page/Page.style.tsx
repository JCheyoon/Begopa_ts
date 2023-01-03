import styled from "styled-components";

export const Page = styled.div`
  padding-top: 200px;
`;
export const Button = styled.button`
  text-decoration: none;
  border: none;
  background-color: var(--orange);
  font-size: 15px;
  padding: 20px 24px;
  border-radius: 3px;
  color: var(--white);
  font-weight: 600;
  cursor: pointer;
  transition: ease-in-out 250ms;

  &:hover {
    background-color: var(--dark-orange);
  }

  &:disabled {
    background-color: var(--gray);
    cursor: not-allowed;
    &:hover {
      background-color: var(--gray);
    }
  }
`;
