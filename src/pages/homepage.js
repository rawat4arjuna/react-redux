import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "../components/profileDetails";

import CenterGrid from "../components/centerGridLayout";
export default function Home(props) {
  const history = useHistory();
  const { profile } = useSelector((state) => state);
  React.useEffect(() => {
    if (!props.location?.state?.isLogin || !profile) {
      history.push("/");
    }
  });
  return (
    <CenterGrid>
      <Profile />
    </CenterGrid>
  );
}
