import React from "react";
import Code from "../components/Code";

export default function About() {
  return (
    <>
      <h2>About</h2>
      <p>
        Note how the elapsed time above didn't reset when you switched to the{" "}
        <Code>/about</Code> page.
      </p>
      <p>
        This page is rendered to HTML, see{" "}
        <Code>view-source:http://localhost:3000/about</Code>.
      </p>
    </>
  );
}
