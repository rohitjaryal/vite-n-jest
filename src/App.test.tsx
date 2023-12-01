import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App.tsx";

describe("Test library check- Should always Pass", () => {
    it("should pass", function () {
        expect(true).toBe(true);
    });
});

describe("Render App component", () => {
    it("component should have title", async function () {
        render(<App />);
        expect(screen.getByText("Vite n Jest"));
    });
});
