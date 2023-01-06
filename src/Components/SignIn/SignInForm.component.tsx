import { SignInFormContainer, SignInButtonContainer } from "./SignInForm.stlye";
import { Button } from "../Page/Page.style";

import FormInput from "./FormInput.component";
import { FormEvent, useState } from "react";

const defaultFormValue = {
  email: "",
  password: "",
};
enum FormType {
  LOGIN = "login",
  SIGNUP = "signup",
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormValue);
  const [formType, setFormType] = useState(FormType.LOGIN);
  const [confirmPassword, setConfirmPassword] = useState("");
  const { email, password } = formFields;

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInFormContainer>
      <h1>WELCOME</h1>
      <form>
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
    </SignInFormContainer>
  );
};
export default SignInForm;
