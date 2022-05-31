import React from "react";
import { useSelector } from "react-redux";
import { State } from "../renderer/types";

export default function Login() {
  const { firstname } = useSelector((state: State) => state.userReducer);
  return <h3>{firstname}</h3>;
}
