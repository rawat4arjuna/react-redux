import * as React from "react";
import EmailCheck from "../components/loginForm";
import CenterGrid from "../components/centerGridLayout";
import StateHook from "../hooks/state";
const initState = {
  cardType: 0,
};
export default function Login() {
  const [state, setState] = StateHook(initState);
  const { cardType } = state;
  return (
    <React.Fragment>
      <CenterGrid>
        {
          {
            0: <EmailCheck />,
          }[cardType]
        }
      </CenterGrid>
    </React.Fragment>
  );
}
