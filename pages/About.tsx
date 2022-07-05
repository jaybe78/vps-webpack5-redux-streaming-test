import React from "react";
import DownloadView from "../components/Download";

export default function About() {
  return (
    <>
      <DownloadView/>
    </>
  );
}

About.initData = () => ({ data: "test data"  })