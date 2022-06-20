import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { State } from "../renderer/types";
import { authenticateUser } from "../features/user/userSlice";
// import { Button } from "@mui/material";
import CustomInput from "./CustomInput";

export default function Login() {
  // const dispatch = useDispatch();
  // const { firstname } = useSelector((state: State) => state.userReducer);
  return (
    <>
      <form>

        <CustomInput labelId={"email"} labelText={"Email"} />
        <Button

          type="button"
          color="primary"
          className="form__custom-button"
        >
          Log in
        </Button>
      </form>
    </>
  );
}
