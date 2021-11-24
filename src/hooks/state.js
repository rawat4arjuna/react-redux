import React from "react";
/**
 * @description 
 * Custom state hook to prevent usestate code junk
 */
export default function StateHook(init = {}) {
  const [state, set] = React.useState(init);
  const setState = (value) => {
    if (!value || typeof value !== "object")
      throw new Error("Input value is not valid");
    set({ ...state, ...value });
  };
  return [state, setState];
}
