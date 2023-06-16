import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import {
    BrowserRouter,
    RouterProvider,
    createMemoryRouter,
} from "react-router-dom";
import { NoPageFound } from "src/pages";

describe("NoPageFound", () => {
    it("should have the text 'woah... what do you think ur doing ?'", () => {
        render(<NoPageFound />, { wrapper: BrowserRouter });

        expect(
            screen.getByText("woah... what do you think ur doing ? 🤔")
        ).toBeInTheDocument();
    });

    it("should navigate back to the home page", async () => {
        const user = userEvent.setup();
        const router = createMemoryRouter(
            [
                {
                    index: true,
                    element: <div>example home page</div>,
                },
                {
                    path: "*",
                    Component: NoPageFound,
                },
            ],
            { initialEntries: ["/bad/route"] }
        );

        render(<RouterProvider router={router} />);

        const button = screen.getByRole("link", { name: /return home/i });
        expect(button).toBeInTheDocument();

        await user.click(button);
        expect(screen.getByText(/example home page/i)).toBeInTheDocument();
    });
});
