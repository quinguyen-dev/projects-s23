import { render } from "@testing-library/react";
import Home from "../Home";
import { MemoryRouter } from "react-router-dom";

describe("Home Screen", () => {
    it("should render correctly", () => {
        const component = render(
            <MemoryRouter initialEntries={["/"]}>
                <Home />
            </MemoryRouter>
        );
        expect(component).toMatchSnapshot();
    });
});
