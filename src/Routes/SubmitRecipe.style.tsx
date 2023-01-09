import styled from "styled-components";

export const SubmitRecipeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  padding: 100px 0;
  h1,
  h2 {
    color: var(--light-black);
    font-weight: 300;
    margin: 20px 0;
  }
  h2 {
    padding-left: 20px;
  }
  @media (min-width: 750px) {
    padding: 60px 0;
  }
`;

export const SubmitRecipeSection = styled.section`
  width: 360px;
  margin-bottom: 10px;
  background-color: var(--white-yellow);
  margin-top: 20px;
  &.header {
    display: flex;
    align-items: center;
    margin-bottom: 0;
    flex-direction: column;
    h1 {
      padding: 10px 0;
    }
  }
  &.ingredients,
  &.tag {
    label {
      color: var(--black);
      font-size: 18px;
      padding: 20px;
      display: inline-block;
    }
  }
  &.bottom {
    background-color: var(--white);
    display: flex;
    label {
      width: 600px;
    }
  }
  @media (min-width: 570px) {
    width: 600px;
  }
  @media (min-width: 750px) {
    width: 800px;
  }
  @media (min-width: 980px) {
    width: 1000px;
  }
`;

export const SubmitRecipeInput = styled.div`
  color: var(--black);
  font-size: 18px;
  padding: 20px;
  label {
    display: inline-block;
    width: 200px;
  }
  input {
    border-radius: 0;
    border: none;
    border-bottom: 1px solid var(--black);
    background: none;
    padding: 10px 10px 10px 5px;
    margin-right: 30px;
    &.error {
      border-bottom: 3px solid red;
    }
    ::placeholder {
      color: var(--gray);
    }
    &:focus {
      outline: none;
    }
  }
  &.instruction {
    label {
      display: block;
      margin-bottom: 20px;
    }
    textarea {
      width: 300px;
      border: none;
      border-bottom: 1px solid var(--black);
      background: none;
      &.error {
        border-bottom: 3px solid red;
      }
      @media (min-width: 570px) {
        width: 500px;
      }
      @media (min-width: 750px) {
        width: 700px;
      }
      @media (min-width: 980px) {
        width: 800px;
      }
      &:focus {
        outline: none;
      }
    }
  }
  &.checkBox {
    padding: 10px 0;
    input {
      accent-color: black;
      margin-right: 10px;
      cursor: pointer;
    }
    label {
      transition: ease-in-out 200ms;
      color: var(--gray);
      width: 330px;
      &:hover {
        cursor: pointer;
        color: var(--light-black);
      }
    }
  }
`;

export const RemoveItemButton = styled.button`
  display: inline-block;
  cursor: pointer;
  border: none;
  background: none;
`;
export const AddItemButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 30px 0 20px 0;
  border: none;
  background: none;
  span {
    cursor: pointer;
  }
`;

export const ListItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  margin-bottom: 20px;
  input {
    border-radius: 0;
    border: none;
    border-bottom: 1px solid var(--black);
    background: none;
    padding: 10px 10px 10px 5px;
    margin-right: 20px;
    &:focus {
      outline: none;
    }
    ::placeholder {
      color: var(--gray);
    }
    &.error {
      border-bottom: 3px solid red;
    }
    @media (min-width: 720px) {
      flex-wrap: nowrap;
    }
  }
`;
