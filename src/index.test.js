import React from "react";
import { render } from "@testing-library/react";

import { SimpleReactComponent } from "./index";

describe("SimpleReactComponent Component", () => {
  test("renders the SimpleReactComponent component", () => {
    render(<SimpleReactComponent />);
  });
});
