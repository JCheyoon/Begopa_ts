import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Recipe from "./Routes/Recipe";
import Authentication from "./Routes/Authentication";
import MyRecipes from "./Routes/MyRecipes";
import SubmitRecipe from "./Routes/SubmitRecipe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="recipe/:id" element={<Recipe />} />
        <Route path="submit" element={<SubmitRecipe />} />
        <Route path="edit/:id" element={<SubmitRecipe isEditMode={true} />} />
        <Route path="my-recipes" element={<MyRecipes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
