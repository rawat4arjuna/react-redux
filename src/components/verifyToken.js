import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { PaperCustom } from "./styleCustoms";
import { otpSchema } from "../utils/schema";
import { FormError } from "./formError";
import StateHook from "../hooks/state";
import {
  VERIFY_EMAIL_TOKEN,
  RESEND_EMAIL_TOKEN,
} from "../redux/actions/userActions";
const initState = {
  attempts: 0,
};
const VerifyToken = (props) => {
  const { setParentState } = props;
  const [state, setState] = StateHook(initState);
  const { attempts } = state;
  const dispatch = useDispatch();
  const history = useHistory();
  const { email, user } = useSelector((state) => state);
  React.useEffect(() => {
    if (attempts === 3) {
      setParentState({ cardType: 0 });
    }
  }, [attempts]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(otpSchema),
  });

//   Handle email token verification
  const onSubmit = async (data) => {
    let body = {
      email: email,
      token: user.token,
      verificationCode: data.otp,
    };
    const res = await dispatch(VERIFY_EMAIL_TOKEN(body));
    if (res?.isLogin) {
      history.push({
        pathname: "/home",
        state: { isLogin: true },
      });
    } else if (
      res?.messageObj?.wrongEmailTokenCount > 2 ||
      res?.messageObj?.resendEmailTokenCount > 2 ||
      res?.messageObj?.otpExpired
    ) {
      setParentState({ cardType: 0 });
    } else if (typeof res == "undefined") {
      setState({ attempts: attempts + 1 });
    }
  };

  // resend token function
  const resendtoken = async () => {
    const res = await RESEND_EMAIL_TOKEN({
      email: email,
      token: user.token?.toString(),
    });
    if (res == 1031) {
      setParentState({ cardType: 0 });
    }
  };
  return (
    <Grid item xs={12} sm={12} md={4}>
      <PaperCustom>
        <form>
          <Typography variant="heading" component="h2">
            React Redux Verification
          </Typography>
          <Grid item xs={12}>
            <Controller
              name={"otp"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  type={"text"}
                  onChange={onChange}
                  value={value}
                  label={"Enter Token"}
                  fullwidth
                  style={{ minWidth: "250px" }}
                />
              )}
            />
          </Grid>
          <FormError value={errors?.otp?.message} />
          <br />
          <Typography
            style={{ cursor: "pointer", color: "blue", marginBottom: "10px" }}
            onClick={resendtoken}
          >
            Resend Token
          </Typography>
          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={handleSubmit(onSubmit)}
              type="submit"
            >
              Verify Token
            </Button>
          </Grid>
        </form>
      </PaperCustom>
    </Grid>
  );
};
export default VerifyToken;
