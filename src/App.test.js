import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  test("render title", () => {
    render(<App />);
    const title = screen.getByText(/Listado de Pokemon/i);
    expect(title).toBeInTheDocument();
  });

  test("render input search", () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/Buscar/i);
    expect(searchInput).toBeInTheDocument();
  });

  test("render button to create", () => {
    render(<App />);
    const button = screen.getByText(/Nuevo/i);
    expect(button).toBeInTheDocument();
  });

  test("show form when click new button", () => {
    render(<App />);
    const button = screen.getByText(/Nuevo/i);
    fireEvent.click(button);

    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });
});
