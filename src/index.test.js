import React from "react";
import { render } from "@testing-library/react";

import { SimpleCounterComponent } from "./index";

describe("SimpleCounterComponent Component", () => {
  test("renders the SimpleCounterComponent component", () => {
    render(<SimpleCounterComponent />);
  });
});
