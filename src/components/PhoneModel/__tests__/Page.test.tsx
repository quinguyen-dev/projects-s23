import { render, screen } from "@testing-library/react";
import Page from "../Page";

describe("Page", () => {
  it("should have Lorem Ipsum in the title", () => {
    render(<Page />);

    expect(screen.getByText("Lorem Ipsum")).toBeInTheDocument();
  });

  it("should render correctly", () => {
    const component = render(<Page />);

    expect(component).toMatchSnapshot();
  });
});
