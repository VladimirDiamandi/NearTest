import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegistrationEmailPage from "../RegistrationEmailPage";
describe("RegistrationEmailPage Component", () => {
  it("Switch email and phone log ways", () => {
    render(<RegistrationEmailPage />);

    const EmailButton = screen.getByText("Email");
    const PhoneButton = screen.getByText("Phone");
    const Input = screen.getByRole("textbox");
    expect(Input).toHaveAttribute("name", "email");
    expect(EmailButton).toBeInTheDocument();
    expect(PhoneButton).toBeInTheDocument();
    userEvent.click(PhoneButton);
    expect(Input).toHaveAttribute("name", "phoneNumber");
  });
});
