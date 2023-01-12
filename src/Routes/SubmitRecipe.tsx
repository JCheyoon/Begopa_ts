import { Button, Page } from "../Components/Page/Page.style";
import {
  AddItemButton,
  ListItemsContainer,
  RemoveItemButton,
  SubmitRecipeContainer,
  SubmitRecipeInput,
  SubmitRecipeSection,
} from "./SubmitRecipe.style";
import { Formik } from "formik";
import { Ingredient } from "../Context/Types";
import { useRef, useState } from "react";
interface Props {
  isEditMode?: Boolean;
}
const initialIngredient: Ingredient = { amount: 0, unit: "", material: "" };

const initialValues = {
  name: "",
  photoUrl: "",
  cookingTime: "",
  servings: "",
  public: false,
  instructions: "",
  tags: [""],
  ingredients: [{ ...initialIngredient }],
};

const SubmitRecipe = ({ isEditMode }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const formRef = useRef(null);

  const submitForm = () => {
    console.log("submit");
  };

  const removeIngredientHandler = (index: number) => {
    if (!formRef?.current) return;
    const { values, setFieldValue } = formRef.current;
    const newIngredients = [...values.ingredients];
    newIngredients.splice(index, 1);
    setFieldValue("ingredients", newIngredients);
  };

  const addIngredientHandler = () => {};
  const removeTagHandler = (index) => {};

  const addTagHandler = () => {};

  return (
    <Page>
      <SubmitRecipeContainer>
        <Formik
          initialValues={initialValues}
          onSubmit={submitForm}
          innerRef={formRef}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
            isValid,
          }) => (
            <form onSubmit={handleSubmit}>
              <SubmitRecipeSection className="header">
                <h1>{isEditMode ? "Edit recipe" : "Submit recipe"}</h1>
              </SubmitRecipeSection>
              <SubmitRecipeSection className="info">
                <SubmitRecipeInput>
                  <label>Recipe Name</label>
                  <input
                    className={touched.name && errors.name ? "error" : ""}
                    placeholder="name"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    name="name"
                  />
                </SubmitRecipeInput>
                <SubmitRecipeInput>
                  <label>Recipe Photo</label>
                  <input
                    className={
                      touched.photoUrl && errors.photoUrl ? "error" : ""
                    }
                    placeholder="Photo Url"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.photoUrl}
                    name="photoUrl"
                  />
                </SubmitRecipeInput>
                <h2>Recipe Information</h2>

                <SubmitRecipeInput>
                  <label>Serving</label>
                  <input
                    className={
                      touched.servings && errors.servings ? "error" : ""
                    }
                    placeholder="0"
                    onBlur={handleBlur}
                    type="number"
                    min="1"
                    onChange={handleChange}
                    name="servings"
                    value={values.servings}
                  />
                  <label>Cooking Time</label>
                  <input
                    className={
                      touched.cookingTime && errors.cookingTime ? "error" : ""
                    }
                    placeholder="0"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cookingTime}
                    name="cookingTime"
                  />
                </SubmitRecipeInput>
              </SubmitRecipeSection>
              <SubmitRecipeSection className="ingredients">
                <label>ingredients</label>
                {values.ingredients.map((ingredient, index) => (
                  <ListItemsContainer key={index}>
                    <input
                      className={
                        touched?.ingredients &&
                        touched.ingredients[index]?.material &&
                        errors?.ingredients &&
                        (errors.ingredients[index] as any)?.material
                          ? "error"
                          : ""
                      }
                      placeholder="Material"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name={`ingredients.[${index}].material`}
                      value={values.ingredients[index].material}
                    />
                    <input
                      className={
                        touched?.ingredients &&
                        touched.ingredients[index]?.amount &&
                        errors?.ingredients &&
                        (errors.ingredients[index] as any)?.amount
                          ? "error"
                          : ""
                      }
                      placeholder="Amount"
                      type="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name={`ingredients.[${index}].amount`}
                      value={values.ingredients[index].amount}
                    />
                    <input
                      className={
                        touched?.ingredients &&
                        touched.ingredients[index]?.unit &&
                        errors?.ingredients &&
                        (errors.ingredients[index] as any)?.unit
                          ? "error"
                          : ""
                      }
                      placeholder="Unit"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name={`ingredients.[${index}].unit`}
                      value={values.ingredients[index].unit}
                    />
                    {values.ingredients.length === 1 && index === 0 ? null : (
                      <RemoveItemButton
                        onClick={() => removeIngredientHandler(index)}
                        type="button"
                      >
                        <span className="material-symbols-outlined">close</span>
                      </RemoveItemButton>
                    )}
                  </ListItemsContainer>
                ))}
                <AddItemButton onClick={addIngredientHandler} type="button">
                  <span className="material-symbols-outlined">add</span>
                  <span>Add</span>
                </AddItemButton>
              </SubmitRecipeSection>
              <SubmitRecipeSection className="instruction">
                <SubmitRecipeInput className="instruction">
                  <label>instruction</label>
                  <textarea
                    className={
                      touched.instructions && errors.instructions ? "error" : ""
                    }
                    placeholder="Ex) 1.prepare vegetables"
                    rows="20"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="instructions"
                    value={values.instructions}
                  />
                </SubmitRecipeInput>
              </SubmitRecipeSection>
              <SubmitRecipeSection className="tag">
                <label>Recipe tags</label>
                {values.tags.map((tag, index) => (
                  <ListItemsContainer key={index}>
                    <input
                      className={touched.tags && errors.tags ? "error" : ""}
                      placeholder="tag"
                      type="text"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name={`tags.[${index}]`}
                      value={values.tags[index]}
                    />
                    {values.tags.length === 1 && index === 0 ? null : (
                      <RemoveItemButton
                        onClick={() => removeTagHandler(index)}
                        type="button"
                      >
                        <span className="material-symbols-outlined">close</span>
                      </RemoveItemButton>
                    )}
                  </ListItemsContainer>
                ))}
                <AddItemButton onClick={addTagHandler} type="button">
                  <span className="material-symbols-outlined">add</span>
                  <span>Add</span>
                </AddItemButton>
              </SubmitRecipeSection>
              <SubmitRecipeSection className="bottom">
                <SubmitRecipeInput className="checkBox">
                  <input
                    type="checkbox"
                    name="public"
                    id="public"
                    checked={values.public}
                    onChange={handleChange}
                  />
                  <label htmlFor="public">
                    Please Check if you want to save in public
                  </label>
                </SubmitRecipeInput>
              </SubmitRecipeSection>
              <Button
                type="submit"
                disabled={loading || !Object.values(touched).length || !isValid}
              >
                Save
              </Button>
            </form>
          )}
        </Formik>
      </SubmitRecipeContainer>
    </Page>
  );
};

export default SubmitRecipe;
