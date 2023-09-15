import { render, screen } from "@testing-library/react";
import App from "src/App";

describe("App", () => {
  it("should render to the home page", () => {
    render(<App />);

    expect(screen.getByText(/projects summer 2023/i)).toBeInTheDocument();
  });
});
