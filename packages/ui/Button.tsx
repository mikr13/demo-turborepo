import * as React from "react";
export const Button = () => {
  return <button>Boop</button>;
};

export const ButtonWithProps = (props: { text: string }) => {
  return <button>{props.text}</button>;
};
