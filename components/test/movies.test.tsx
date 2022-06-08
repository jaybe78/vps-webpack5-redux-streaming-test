import { render } from "@testing-library/react";
import React from "react";
import Movies from "../Movies";
import { useSsrData } from "react-streaming";

jest.mock("react-streaming");
const mockUseSsrData = () => ({ results: [{ director: "michael" }] });
(useSsrData as jest.Mock).mockImplementation(mockUseSsrData);

describe("test", () => {
  it("render movies pages", () => {
    render(<Movies />);
  });
});
