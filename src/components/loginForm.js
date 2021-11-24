import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { PaperCustom } from "./styleCustoms";
import { emailExistSchema } from "../utils/schema";
import { FormError } from "./formError";
import { REQUEST_EMAIL_VERIFICATION } from "../redux/actions/userActions";

const EmailCheck = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log("user", user);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(emailExistSchema),
  });
  const onSubmit = (data) => {
    dispatch(REQUEST_EMAIL_VERIFICATION(data));
  };
  console.log("p[p[p[p[", errors);
  return (
    <Grid item xs={12} sm={12} md={4}>
      <PaperCustom>
        <form>
          <Typography variant="heading" component="h2">
            React Redux
          </Typography>
          <Grid item sm={12}>
            <Controller
              name={"email"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  type={"email"}
                  onChange={onChange}
                  value={value}
                  label={"Enter Email"}
                  fullwidth={true}
                />
              )}
            />
          </Grid>
          <FormError value={errors?.email?.message} />
          <Grid item sm={12}>
            <Button variant="contained" onClick={handleSubmit(onSubmit)}>
              Continue
            </Button>
          </Grid>
        </form>
      </PaperCustom>
    </Grid>
  );
};
export default EmailCheck;
