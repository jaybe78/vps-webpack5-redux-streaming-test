import React from "react";
import { PageProps } from "../../renderer/types";
import CustomInput from "../../components/CustomInput";

export { Page };

function Page(pageProps: PageProps) {
  return (
    <form>
      <CustomInput labelId={"email"} labelText={"Email"} />
    </form>
  );
}
