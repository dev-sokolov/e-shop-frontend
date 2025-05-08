/** @jsxImportSource @emotion/react */
import { useForm } from "react-hook-form";

import TextField from "../../../shared/components/TextField/TextField";
import Button from "../../../shared/components/Button/Button";

import fields from "./fields";

import { registerFormStyle } from "./styles";

const RegisterForm = ({ submitForm }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    submitForm(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} css={registerFormStyle}>
      <TextField {...fields.email} register={register} error={errors.email} />
      <TextField
        {...fields.password}
        register={register}
        error={errors.password}
      />
      <Button>Register</Button>
    </form>
  );
};

export default RegisterForm;
