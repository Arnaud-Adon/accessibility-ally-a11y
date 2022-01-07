import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import { axe } from "jest-axe";
import { axe } from "../axe-config";

import React from "react";
import App from "../App";

describe("App test suite", () => {
  it("should have no accessibility errors caught by jest axe", async () => {
    const { container } = render(<App />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});
