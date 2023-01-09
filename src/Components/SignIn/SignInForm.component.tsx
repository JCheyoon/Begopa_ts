import { SignInFormContainer, SignInButtonContainer } from "./SignInForm.stlye";
import { Button } from "../Page/Page.style";

import FormInput from "./FormInput.component";
import { FormEvent, useState } from "react";
import { useAxios } from "../Hook/useAxios";
import { useContextAuth } from "../../Context/authContext";
import { useNavigate } from "react-router-dom";
import { LoginRequest } from "../../Context/Types";

const defaultFormValue: LoginRequest = {
  email: "",
  password: "",
};
enum FormType {
  LOGIN = "login",
  SIGNUP = "signup",
}

const SignInForm = () => {
  const { post } = useAxios();
  const { handleLogin } = useContextAuth();
  const [formFields, setFormFields] = useState<LoginRequest>(defaultFormValue);
  const [formType, setFormType] = useState(FormType.LOGIN);
  const [confirmPassword, setConfirmPassword] = useState("");
  const { email, password } = formFields;
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (formType === FormType.LOGIN) {
      try {
        const response = await post<LoginRequest>("/user/login", formFields);
        handleLogin(response.data);
        navigate("/");
      } catch (e) {
        console.log(e);
      }
    } else if (formType === FormType.SIGNUP) {
      try {
        const response = await post<LoginRequest>("/user/signup", formFields);
        setFormType(FormType.LOGIN);
        resetForm();
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormFields({ ...formFields, [name]: value });
  };

  const changeForm = () => {
    setFormType(formType === FormType.LOGIN ? FormType.SIGNUP : FormType.LOGIN);
    resetForm();
  };

  const resetForm = () => {
    setFormFields({ email: "", password: "" });
    setConfirmPassword("");
  };

  return (
    <SignInFormContainer>
      <h1>WELCOME</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        {formType === FormType.SIGNUP ? (
          <FormInput
            label="Confirm password"
            type="password"
            required
            onChange={(e) =>
              setConfirmPassword((e.target as HTMLInputElement).value)
            }
            name="confirmPassword"
            value={confirmPassword}
          />
        ) : null}

        <SignInButtonContainer>
          <Button
            type="submit"
            disabled={
              formType === FormType.LOGIN
                ? !email || !password
                : !email ||
                  !password ||
                  !confirmPassword ||
                  password !== confirmPassword
            }
          >
            {formType === FormType.LOGIN ? "LOGIN" : "SIGN UP"}
          </Button>
        </SignInButtonContainer>
      </form>
      <span onClick={changeForm}>
        {formType === FormType.LOGIN
          ? "Don't have an account? Sign up"
          : "Already have an account? Log in"}
      </span>
    </SignInFormContainer>
  );
};
export default SignInForm;
