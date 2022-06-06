import React from "react";
import { useAsync, useSsrData } from "../react-streaming";

type toto = {
  tt: string;
};

export default function Weather() {
  const wth = useSsrData("weather", async () => {
    const response = await fetch(
      "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0"
    );
    return response.json();
  });
  return <ul>{wth?.product}</ul>;
}
