import React from "react";
import { loginFormValidationSchema } from "./LoginFormValidation";
import { FormContainer, Input } from "../atoms";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginFormValidationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormContainer>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="Email"
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
          );
        }}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="Password"
              type="password"
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />
          );
        }}
      />

      <Button disabled={!isValid} onClick={handleSubmit(onSubmit)}>
        Sign In
      </Button>
    </FormContainer>
  );
};
