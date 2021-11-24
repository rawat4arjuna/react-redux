import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { PaperCustom } from "./styleCustoms";
import { LOGOUT } from "../redux/actions/userActions";

const ProfileDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { profile } = useSelector((state) => state);
  console.log("ppppppp", profile);
  const logout = async () => {
    const islogout = await dispatch(
      LOGOUT({ id: profile._id, accessToken: profile.token })
    );
    if (islogout) {
      history.push("/");
    }
  };
  return (
    <Grid item xs={12} sm={12} md={4}>
      <PaperCustom>
        <form>
          <Typography variant="heading" component="h2">
            Profile
          </Typography>
          <Grid item sm={12}>
            <Typography variant="heading" component="h5">
              Full Name :
            </Typography>
            <Typography variant="body">{`${profile?.firstName} ${profile?.lastName}`}</Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography variant="heading" component="h5">
              Email :
            </Typography>
            <Typography variant="body">{profile?.email}</Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography variant="heading" component="h5">
              Phone :
            </Typography>
            <Typography variant="body">{profile?.phoneNumber}</Typography>
          </Grid>
          <Grid item sm={12}>
            <Button variant="contained" onClick={logout}>
              Logout
            </Button>
          </Grid>
        </form>
      </PaperCustom>
    </Grid>
  );
};
export default ProfileDetails;
