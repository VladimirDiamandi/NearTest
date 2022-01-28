import { fireEvent, render, screen } from "@testing-library/react";
import React, { FC } from "react";
import Input from '.';
describe("Input Component", () => {
  it("base render", () => {
    render(<Input name='email'/>);
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("name")
  });
  it("test props", () => {
    const placeholderProps = "write something"
    const titleProps = "Email"
    const errorsProps = "Error"
    render(<Input name='email' placeholder={placeholderProps} title={titleProps} errors={errorsProps}/>);
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('Error')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('write something')).toBeInTheDocument()
  });
  it("onChange event", () => {
    let inputValue = "";
    const handleChangeCallback = jest.fn((event) => {
      inputValue = event?.target?.value;
    });
    render(<Input name='login' onChange={handleChangeCallback} value={inputValue} />);
    const inputTestTextValue = "test text";
    const input = screen.getByRole('textbox');
    fireEvent.change(input,{
      target: {
        value: inputTestTextValue,
      },
    })
    expect(input).toBeInTheDocument();
    expect(inputTestTextValue === inputValue).toBeTruthy();
    expect(handleChangeCallback).toHaveBeenCalledTimes(1)
  });
});