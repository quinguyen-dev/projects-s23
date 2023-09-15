import { render } from "@testing-library/react";
import Home from "../Home";
import { BrowserRouter } from "react-router-dom";

describe("Home Screen", () => {
  it("should render correctly", () => {
    const component = render(<Home />, { wrapper: BrowserRouter });
    expect(component).toMatchSnapshot();
  });
});
