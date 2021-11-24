import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { PaperCustom } from "./styleCustoms";
import { otpSchema } from "../utils/schema";
import { FormError } from "./formError";
import {
  VERIFY_EMAIL_TOKEN,
  RESEND_EMAIL_TOKEN,
} from "../redux/actions/userActions";

const VerifyToken = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { email, user } = useSelector((state) => state);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(otpSchema),
  });
  const onSubmit = async (data) => {
    let body = {
      email: email,
      token: user.token,
      verificationCode: data.otp,
    };
    const isLogin = await dispatch(VERIFY_EMAIL_TOKEN(body));
    if (isLogin) {
      history.push({
        pathname: "/home",
        state: { isLogin: true },
      });
    }
  };
  const resendtoken = () => {
    RESEND_EMAIL_TOKEN({ email: email, token: user.token?.toString() });
  };
  return (
    <Grid item xs={12} sm={12} md={4}>
      <PaperCustom>
        <form>
          <Typography variant="heading" component="h2">
            React Redux Verification
          </Typography>
          <Grid item sm={12}>
            <Controller
              name={"otp"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  type={"text"}
                  onChange={onChange}
                  value={value}
                  label={"Enter Token"}
                  fullwidth={true}
                />
              )}
            />
          </Grid>
          <FormError value={errors?.otp?.message} />
          <br />
          <Button onClick={resendtoken}>Resend Token</Button>
          <Grid item sm={12}>
            <Button variant="contained" onClick={handleSubmit(onSubmit)}>
              Verify Token
            </Button>
          </Grid>
        </form>
      </PaperCustom>
    </Grid>
  );
};
export default VerifyToken;
