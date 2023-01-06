import styled from "styled-components";

export const Input = styled.input`
  background-color: white;
  color: var(--black);
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid var(--black);
  margin: 25px 0;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: var(--orange);
  }
`;

export const FormInputContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;
