import { render, screen } from "@testing-library/react";
import App from "../App";

describe("renders Routes", () => {
  describe("When Home link is clicked", () => {
    it("should renders the home page", () => {
      render(<App />);
      const linkElement = screen.getByText(/Home Page/i);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
