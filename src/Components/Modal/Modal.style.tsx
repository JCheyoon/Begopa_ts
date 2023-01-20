import styled from "styled-components";

export const BackDropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

export const OverlayContainer = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 26);
  border-radius: 10px;
  position: fixed;
  top: 30vh;
  left: calc(50% - 45vw);
  width: 90vw;
  z-index: 100;
  overflow: hidden;
  @media (min-width: 768px) {
    left: calc(50% - 325px);
    width: 650px;
`;

export const ModalHeader = styled.header`
  background: var(--orange);
  padding: 1rem;
  h2 {
    margin: 0;
    color: white;
  }
`;

export const Content = styled.div`
  padding: 1rem;
`;

export const ModalFooter = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
