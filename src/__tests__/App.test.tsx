import { render } from "@testing-library/react";
import App from "src/App";
import { MemoryRouter } from "react-router-dom";

describe("App", () => {
    it("should render correctly", () => {
        const component = render(<App />);
        expect(component).toMatchSnapshot();
    });
});
