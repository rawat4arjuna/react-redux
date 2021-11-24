import * as React from "react";
import { useSelector } from "react-redux";
import EmailCheck from "../components/loginForm";
import SignupForm from "../components/signupForm";
import CenterGrid from "../components/centerGridLayout";
import StateHook from "../hooks/state";
const initState = {
  cardType: 0,
};
export default function Login() {
  const [state, setState] = StateHook(initState);
  const user = useSelector((state) => state.user);
  const { cardType } = state;
  React.useEffect(() => {
    if (user?.isLogin === false) {
      setState({ cardType: 1 });
    }
  }, [user]);
  return (
    <React.Fragment>
      <CenterGrid>
        {{
          0: <EmailCheck />,
          1: <SignupForm />,
        }[cardType] || <div>Something Went wrong Please Try again</div>}
      </CenterGrid>
    </React.Fragment>
  );
}
