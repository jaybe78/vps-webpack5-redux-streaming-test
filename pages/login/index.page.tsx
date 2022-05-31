import React from "react";
import { PageProps } from "../../renderer/types";
import CustomInput from "../../components/CustomInput";

export { Page };

function Page(pageProps: PageProps) {
  console.log("pageprops from login", pageProps);

  return (
    <form>
      <CustomInput labelId={"email"} labelText={"Email"} />
    </form>
  );
}
