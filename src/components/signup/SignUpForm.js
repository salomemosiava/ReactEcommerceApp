import React from "react";
import { FormContainer, Input } from "../atoms";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupValidationSchema } from "./SignUpFormValidation";
import { Button } from "@mui/material";

export const SignUpForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(signupValidationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log("error: ", errors);

  return (
    <FormContainer>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="First Name"
              error={Boolean(errors.firstName)}
              helperText={errors.firstName?.message}
            />
          );
        }}
      />

      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="Last Name"
              error={Boolean(errors.lastName)}
              helperText={errors.lastName?.message}
            />
          );
        }}
      />

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
              label="email"
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
        Sign Up
      </Button>
    </FormContainer>
  );
};
