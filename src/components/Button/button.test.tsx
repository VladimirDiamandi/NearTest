import { fireEvent, render, screen } from "@testing-library/react";
import React, { FC } from "react";
import Button from ".";

describe("Button Component", () => {
  it("base render", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  it("title", () => {
    const testTitle = "Click me"
    render(<Button title={testTitle}/>);
    const title = screen.getByText("Click me");
    expect(title).toBeInTheDocument();
  });
  it("click event", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1)
  });
  it("valid icon components", () => {
    const StartIconComponent: FC = () => <div>StartIcon</div>;
    const EndIconComponent: FC = () => <div>EndIcon</div>;
    render(
      <Button
        startIcon={<StartIconComponent />}
        endIcon={<EndIconComponent />}
      />
    );
    expect(screen.getByText("StartIcon")).toBeInTheDocument();
    expect(screen.getByText("EndIcon")).toBeInTheDocument();
  });
  it("not valid icon components", () => {
    const StartIconComponent: FC = () => <div>StartIcon</div>;
    const EndIconComponent: FC = () => <div>EndIcon</div>;
    render(
      <Button
        startIcon={StartIconComponent}
        endIcon={EndIconComponent}
      />
    );
    expect(screen.queryByText("StartIcon")).not.toBeInTheDocument();
    expect(screen.queryByText("EndIcon")).not.toBeInTheDocument();
  });
});
