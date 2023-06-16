import { describe, it, expect, test } from "vitest";
import Login from "./login";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

vi.mock("react-router-dom", () => {
  return { useNavigate: vi.fn() };
});


describe("Login component", () => {
  // Verificar que el componente se renderice sin errores
  test("should render without errors", () => {
    render(<Login />);
  });
    
  // Verificar que los valores de email y password se actualicen correctamente
  test("should update email and password on input change", () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
  
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
  
    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password123");
});
  
  // Verificar que el mensaje de error se muestre correctamente
  test("should display error message on form submission with missing email or password", () => {
    render(<Login />);
    const submitButton = screen.getByText("Log in");
  
    fireEvent.click(submitButton);
  
    const errorMessage = screen.getByText("Please provide email and password");
  
    expect(errorMessage).toBeInTheDocument();
});
});


