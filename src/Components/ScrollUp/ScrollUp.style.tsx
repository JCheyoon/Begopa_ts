import styled from "styled-components";

export const ScrollUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 50px;
  height: 40px;
  bottom: -8px;
  right: 30px;
  font-size: 50px;
  color: var(--white);
  background-color: var(--gray);
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  opacity: 0;
  transition: ease-in-out 300ms;
  pointer-events: none;

  &.visible {
    opacity: 0.8;
    pointer-events: auto;
    cursor: pointer;
  }

  &:hover {
    background-color: var(--orange);
    transform: translateY(-4px);
  }
`;
