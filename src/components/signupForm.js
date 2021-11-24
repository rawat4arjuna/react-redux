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
import { CHECK_REFERAL_TOKEN, SIGN_UP } from "../redux/actions/userActions";
const initState = {
  source: "WEB_APP",
  refer: "",
  isValid: false,
  error: "",
};
const SignupForm = () => {
  const [state, setState] = StateHook(initState);
  const { source, refer, isValid, error } = state;
  const dispatch = useDispatch();
  const { email, user } = useSelector((state) => state);

  React.useEffect(() => {
    (async () => {
      if (refer.length == 6) {
        let res = await CHECK_REFERAL_TOKEN(refer);
        setState({
          isValid: res,
          error: res
            ? ""
            : "Please enter valid referal otherwise leave it blank",
        });
      } else {
        setState({ isValid: false });
      }
    })();
  }, [refer]);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(signupSchema),
  });
  const onSubmit = (data) => {
    const body = {
      firstName: data.firstName,
      email: email,
      referredCodeKey: refer,
      agreeToPrivacyPolicy: data.agreeToPrivacyPolicy,
      token: user.token,
      source: source,
    };
    if ((isValid && refer.length == 6) || (!isValid && refer.length == 0)) {
      dispatch(SIGN_UP(body));
    } else {
      setState({
        error: "Please enter valid referal otherwise leave it blank",
      });
    }
  };
  return (
    <Grid container xs={12} sm={12} md={4} spacing={2}>
      <PaperCustom>
        <form>
          <Typography variant="heading" component="h2">
            React Redux Signup
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name={"firstName"}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    type={"text"}
                    onChange={onChange}
                    value={value}
                    label={"Enter First Name"}
                    fullwidth
                    style={{ minWidth: "250px" }}
                  />
                )}
              />
            </Grid>
            <FormError value={errors?.firstName?.message} />
            <br />
            <Grid item xs={12}>
              <TextField
                type={"email"}
                value={email}
                label={"Enter Email"}
                fullwidth
                disabled
                style={{ minWidth: "250px" }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                type={"text"}
                onChange={(e) => {
                  e.target.value.length < 7 &&
                    setState({ refer: e.target.value });
                }}
                value={refer}
                label={"Enter ReferCode Key"}
                fullwidth
                style={{ minWidth: "250px" }}
              />
            </Grid>
            <FormError value={error} />

            <Grid item xs={12}>
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
            <Grid item xs={12}>
              <Button variant="contained" onClick={handleSubmit(onSubmit)}>
                Continue
              </Button>
            </Grid>
          </Grid>
        </form>
      </PaperCustom>
    </Grid>
  );
};
export default SignupForm;
