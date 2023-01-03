import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  SearchContainer,
  NavbarContainer,
  EmptyDiv,
  NavLink,
  NavButton,
} from "./Navbar.style";

const Navbar = () => {
  // const { isLoggedIn, handleLogout } = useContextAuth();
  const [searchField, setSearchField] = useState("");
  // const { filterByName } = useContextRecipe();
  const location = useLocation();

  const onSearchChange = (e: InputEvent) => {
    const searchFieldString = (
      e.target as HTMLInputElement
    )?.value.toLowerCase();
    // setSearchField(searchFieldString);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      // filterByName(searchField);
    }
  };

  return (
    <NavbarContainer>
      {location.pathname === "/" ? (
        <SearchContainer>
          Browse Recipes
          <input
            type="text"
            placeholder="Find a recipe..."
            // onChange={onSearchChange}
            // onKeyUp={handleKeyPress}
          />
          {/*<button type="submit" onClick={() => filterByName(searchField)}>*/}
          {/*  <span className="material-symbols-outlined">search</span>*/}
          {/*</button>*/}
        </SearchContainer>
      ) : (
        <EmptyDiv />
      )}

      {/*{isLoggedIn ? (*/}
      {/*  <>*/}
      {/*    <NavLink to="/submit">*/}
      {/*      <span className="material-symbols-outlined">description</span>*/}
      {/*      <span>Submit Recipe</span>*/}
      {/*    </NavLink>*/}
      {/*    <NavLink to="/my-recipes">*/}
      {/*      <span className="material-symbols-outlined">favorite</span>*/}
      {/*      <span>My Recipes</span>*/}
      {/*    </NavLink>*/}
      {/*    <NavButton onClick={handleLogout}>*/}
      {/*      <span className="material-symbols-outlined">lock</span>*/}
      {/*      <span>Logout</span>*/}
      {/*    </NavButton>*/}
      {/*  </>*/}
      {/*) : (*/}
      {/*  <NavLink to="/auth">*/}
      {/*    <span className="material-symbols-outlined">lock</span>*/}
      {/*    <span>Login</span>*/}
      {/*  </NavLink>*/}
      {/*)}*/}
    </NavbarContainer>
  );
};

export default Navbar;
