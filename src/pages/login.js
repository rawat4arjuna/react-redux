import * as React from "react";
import { useSelector } from "react-redux";
import EmailCheck from "../components/loginForm";
import SignupForm from "../components/signupForm";
import CenterGrid from "../components/centerGridLayout";
import VerifyToken from "../components/verifyToken";
import StateHook from "../hooks/state";
const initState = {
  cardType: 0,
};
export default function Login() {
  const [state, setState] = StateHook(initState);
  const { user, isVerification } = useSelector((state) => state);
  const { cardType } = state;
  React.useEffect(() => {
    if (user?.isLogin === false) {
      setState({ cardType: 1 });
    }
    if (isVerification) {
      setState({ cardType: 2 });
    }
  }, [user, isVerification]);
  return (
    <React.Fragment>
      <CenterGrid>
        {{
          0: <EmailCheck />,
          1: <SignupForm />,
          2: <VerifyToken setParentState={setState} />,
        }[cardType] || <div>Something Went wrong Please Try again</div>}
      </CenterGrid>
    </React.Fragment>
  );
}
