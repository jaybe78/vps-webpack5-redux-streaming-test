import React from "react";
import { useIntl } from "react-intl";
import {useSsrData} from "react-streaming";

export default function Home() {
  const movies = useSsrData("movies", async () => {
    const response = await fetch(
      "https://star-wars.brillout.com/api/films.json"
    );
    return response.json();
  });
  const intl = useIntl();
  return (
    <div>
      {intl.formatMessage({
        id: "app_name",
        defaultMessage: "app_name",
      })}
    </div>
  );
}
