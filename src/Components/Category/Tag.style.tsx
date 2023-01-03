import styled from "styled-components";

export const TagBubble = styled.button`
  padding: 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid var(--gray);
  background-color: var(--white);
  margin-top: 20px;
  margin-right: 20px;
  cursor: pointer;

  &.big {
    font-size: 28px;
  }
  &:hover {
    color: var(--orange);
    border: 2px solid var(--orange);
  }
`;
