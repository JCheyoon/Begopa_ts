import { Input, FormInputContainer } from "./FormInput.style";
import { FormEvent } from "react";

interface Props {
  label: string;
  type: string;
  required: boolean;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  name: string;
  value: any;
}

const FormInput = ({ label, ...otherProps }: Props) => {
  return (
    <FormInputContainer>
      <Input placeholder={label} {...otherProps} />
    </FormInputContainer>
  );
};

export default FormInput;
