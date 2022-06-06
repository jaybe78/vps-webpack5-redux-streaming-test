import { render, screen } from "@testing-library/react";
import React from "react";
import Movies from "../Movies";
import { useSsrData } from "react-streaming";

jest.mock("react-streaming/useSsrData");
const mockUseSsrData = () => ({ results: [{ director: "michael" }] });
(useSsrData as jest.Mock).mockImplementation(mockUseSsrData);

describe("test", () => {
  it("render movies pages", () => {
    // useSsrData.mockImplementation(() => "Craig");
    // (useSsrData as jest.Mock).mockImplementation(() => { results: [{ director: 'michael' }] });
    render(<Movies />);
  });
});
