import { Button, Page } from "../Components/Page/Page.style";
import {
  AddItemButton,
  ListItemsContainer,
  RemoveItemButton,
  SubmitRecipeContainer,
  SubmitRecipeInput,
  SubmitRecipeSection,
} from "./SubmitRecipe.style";
import { Formik, FormikProps } from "formik";
import { Ingredient, RecipeType } from "../Context/Types";
import { Ref, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useContextRecipe } from "../Context/recipeContext";
import { useAxios } from "../Components/Hook/useAxios";

interface Props {
  isEditMode?: Boolean;
}
function fixValues(values: RecipeType) {
  const copy = { ...values };
  copy.tags = copy.tags.map(
    (tag) => tag.charAt(0).toUpperCase() + tag.slice(1)
  );
  return copy;
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
} as unknown as RecipeType;

const SubmitRecipe = ({ isEditMode }: Props) => {
  const { id } = useParams();
  const { search } = useLocation();
  const { get } = useAxios();
  const [loading, setLoading] = useState<boolean>(false);
  const formRef = useRef<FormikProps<RecipeType>>(null);
  const navigate = useNavigate();
  const [fetchedRecipe, setFetchedRecipe] = useState<RecipeType>();
  const { saveNewRecipe, updateRecipe } = useContextRecipe();

  useEffect(() => {
    if (!id || !isEditMode) return;
    const query = new URLSearchParams(search);
    const isPublic = query.get("public") === "true";
    fetchRecipe(id, isPublic);
  }, [id]);

  useEffect(() => {
    if (!formRef?.current || !fetchedRecipe) return;
    formRef.current.resetForm({
      values: {
        name: fetchedRecipe.name,
        photoUrl: fetchedRecipe.photoUrl,
        cookingTime: fetchedRecipe.cookingTime,
        servings: fetchedRecipe.servings,
        isPublic: fetchedRecipe.isPublic,
        instructions: fetchedRecipe.instructions,
        tags: fetchedRecipe.tags,
        ingredients: fetchedRecipe.ingredients,
      } as RecipeType,
    });
  }, [fetchedRecipe]);

  const fetchRecipe = async (id: string, isPublic: boolean, token?: string) => {
    setLoading(true);
    try {
      const response = await get(
        `/recipe/${isPublic ? "" : "private/"}${id}`,
        token
      );
      setFetchedRecipe(response.data);
    } catch (e: any) {
      console.log(e.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const removeIngredientHandler = (index: number) => {
    if (!formRef?.current) return;
    const { values, setFieldValue } = formRef.current;
    const newIngredients = [...values.ingredients];
    newIngredients.splice(index, 1);
    setFieldValue("ingredients", newIngredients);
  };

  const addIngredientHandler = () => {
    if (!formRef?.current) return;
    const { values, setFieldValue } = formRef.current;
    const newIngredients = [...values.ingredients, { ...initialIngredient }];
    setFieldValue("ingredients", newIngredients);
  };
  const removeTagHandler = (index: number) => {
    if (!formRef?.current) return;
    const { values, setFieldValue } = formRef.current;
    const newTags = [...values.tags];
    newTags.splice(index, 1);
    setFieldValue("tags", newTags);
  };

  const addTagHandler = () => {
    if (!formRef?.current) return;
    const { values, setFieldValue } = formRef.current;
    const newTags = [...values.tags, ""];
    setFieldValue("tags", newTags);
  };

  const submitForm = async (values: RecipeType) => {
    if (!formRef?.current) return;

    setLoading(true);
    const fixedValues = fixValues(values);

    try {
      let response;
      if (isEditMode) {
        response = await updateRecipe(fixedValues, id);
      } else {
        response = await saveNewRecipe(fixedValues, id);
      }
      navigate(`/recipe/${response.data.id}?public=${values.isPublic}`);
    } catch (e: any) {
      console.log("error", e.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page>
      <SubmitRecipeContainer>
        <Formik
          initialValues={initialValues}
          onSubmit={submitForm}
          innerRef={formRef as unknown as Ref<FormikProps<RecipeType>>}
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
                        (errors.ingredients[index] as unknown as Ingredient)
                          ?.material
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
                        (errors.ingredients[index] as unknown as Ingredient)
                          ?.amount
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
                        (errors.ingredients[index] as unknown as Ingredient)
                          ?.unit
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
                    rows={20}
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
                    checked={values.isPublic}
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
