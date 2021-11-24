import React from "react";
import {
  Button,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { PaperCustom } from "./styleCustoms";
import { signupSchema } from "../utils/schema";
import { FormError } from "./formError";
import StateHook from "../hooks/state";
import { REQUEST_EMAIL_VERIFICATION } from "../redux/actions/userActions";
const initState = {
  source: "WEB_APP",
};
const SignupForm = () => {
  const [state, setState] = StateHook(initState);
  const { source } = state;
  const dispatch = useDispatch();
  const { email, user } = useSelector((state) => state);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(signupSchema),
  });
  const onSubmit = (data) => {
    dispatch(REQUEST_EMAIL_VERIFICATION(data));
  };
  return (
    <Grid item xs={12} sm={12} md={4} spacing={2}>
      <PaperCustom>
        <form>
          <Typography variant="heading" component="h2">
            React Redux Signup
          </Typography>
          <Grid item sm={12}>
            <Controller
              name={"firstName"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  type={"text"}
                  onChange={onChange}
                  value={value}
                  label={"Enter First Name"}
                  fullwidth={true}
                />
              )}
            />
          </Grid>
          <FormError value={errors?.firstName?.message} />
          <br />
          <Grid item sm={12}>
            <TextField
              type={"text"}
              value={email}
              label={"Enter Email"}
              fullwidth={true}
              disabled
            />
          </Grid>
          <br />
          <Grid item sm={12}>
            <Controller
              name={"referredCodeKey"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  type={"text"}
                  onChange={onChange}
                  value={value}
                  label={"Enter ReferCode Key"}
                  fullwidth={true}
                />
              )}
            />
          </Grid>
          <br />
          <Grid item sm={12}>
            <Controller
              name={"agreeToPrivacyPolicy"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormControlLabel
                  value={value}
                  onChange={onChange}
                  control={<Checkbox />}
                  label="Agree to Privacy Policy"
                />
              )}
            />
          </Grid>
          <FormError value={errors?.agreeToPrivacyPolicy?.message} />
          <br />
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
export default SignupForm;
