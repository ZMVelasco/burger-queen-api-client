import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Waiter from "./waiter";
import Sidebar from "./sidebar";

vi.mock("react-router-dom", () => {
    return { useNavigate: vi.fn() };
  });

describe("Sidebar component", () => {
    test("Sidebar is rendered correctly", () => {
        const {getByText} = render(<Sidebar />)

        expect(getByText("Home")).toBeInTheDocument();
        expect(getByText("Create order")).toBeInTheDocument();
        expect(getByText("Track order")).toBeInTheDocument();
    })
})