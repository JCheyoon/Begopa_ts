import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  padding-top: 130px;

  border-bottom: 1px solid var(--light-gray);

  @media (min-width: 750px) {
    height: 70px;
    padding-top: 0;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: var(--gray);

  span {
    margin-left: 7px;
  }

  &:hover {
    color: var(--dark-gray);
  }
`;
export const NavButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: var(--gray);
  border: none;
  background: none;
  font-size: 16px;
  font-family: "Barlow", sans-serif;

  span {
    margin-left: 7px;
  }

  &:hover {
    color: var(--dark-gray);
  }
`;

export const SearchContainer = styled.div`
  flex-grow: 4;
  padding: 10px 35px;
  color: var(--gray);
  display: flex;
  align-items: center;

  input {
    margin-left: 8px;
    height: 40px;
    border: 1px solid var(--gray);
    border-right: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    &:focus {
      outline: none;
      border-color: var(--orange);
    }

    @media (min-width: 750px) {
      padding: 10px 15px;
    }
  }

  button {
    height: 40px;
    width: 50px;
    color: var(--white);
    background: var(--orange);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
`;

export const EmptyDiv = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 4;
  padding: 10px 35px;
`;
