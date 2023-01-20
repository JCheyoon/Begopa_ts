import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Recipe from "./Routes/Recipe";
import Authentication from "./Routes/Authentication";
import MyRecipes from "./Routes/MyRecipes";
import SubmitRecipe from "./Routes/SubmitRecipe";
import { AuthProvider } from "./Context/authContext";
import { RecipeProvider } from "./Context/recipeContext";
import Navigation from "./Components/Navigation/Navigation.component";
import { ModalProvider } from "./Context/modalContext";
import Modal from "./Components/Modal/Modal";

function App() {
  return (
    <ModalProvider>
      <Modal />
      <BrowserRouter>
        <AuthProvider>
          <RecipeProvider>
            <Navigation />
            <Routes>
              <Route index element={<Home />} />
              <Route path="auth" element={<Authentication />} />
              <Route path="recipe/:id" element={<Recipe />} />
              <Route path="submit" element={<SubmitRecipe />} />
              <Route
                path="edit/:id"
                element={<SubmitRecipe isEditMode={true} />}
              />
              <Route path="my-recipes" element={<MyRecipes />} />
            </Routes>
          </RecipeProvider>
        </AuthProvider>
      </BrowserRouter>
    </ModalProvider>
  );
}

export default App;
