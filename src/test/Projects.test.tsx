import { render, screen } from "@testing-library/react";
import ProjectPage from "../pages/ProjectPage";

describe("ProjectPage", () => {
  it("should renders an 'ADD PROJECT' button", () => {
    render(<ProjectPage />);
    const btnAddProject = screen.getByText(/ADD PROJECT/i);
    expect(btnAddProject).toBeInTheDocument();
  });
});
