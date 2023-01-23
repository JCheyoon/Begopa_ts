import * as yup from "yup";

export const IngredientSchema = yup.object({
  amount: yup.number().min(0, "INVALID_VALUE").required("FIELD_REQUIRED"),
  unit: yup.string().required("FIELD_REQUIRED"),
  material: yup.string().required("FIELD_REQUIRED"),
});

export const RecipeInputSchema = yup.object({
  public: yup.boolean().required("FIELD_REQUIRED"),
  name: yup.string().required("FIELD_REQUIRED"),
  photoUrl: yup.string().url("INVALID_FORMAT").required("FIELD_REQUIRED"),
  instructions: yup.string().required("FIELD_REQUIRED"),
  tags: yup
    .array(yup.string().required("FIELD_REQUIRED"))
    .required("FIELD_REQUIRED"),
  servings: yup.number().min(1, "INVALID_VALUE").required("FIELD_REQUIRED"),
  cookingTime: yup.string().required("FIELD_REQUIRED"),
  ingredients: yup
    .array(IngredientSchema)
    .min(1, "CANT_BE_EMPTY")
    .required("FIELD_REQUIRED"),
});
