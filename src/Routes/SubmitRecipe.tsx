import { Page } from "../Components/Page/Page.style";
import { SubmitRecipeContainer } from "./SubmitRecipe.style";
import { Formik } from "formik";
interface Props {
  isEditMode?: Boolean;
}
const initialIngredient = { amount: "", unit: "", material: "" };

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
  const submitForm = () => {
    console.log("submit");
  };

  return (
    <Page>
      <SubmitRecipeContainer>
        <Formik initialValues={initialValues} onSubmit={submitForm}>
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
            isValid,
          }) => <form onSubmit={handleSubmit}></form>}
        </Formik>
      </SubmitRecipeContainer>
    </Page>
  );
};

export default SubmitRecipe;
