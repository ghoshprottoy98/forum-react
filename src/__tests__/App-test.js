import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "../App";

describe("When the application is initially rendered...", () => {
  test("The topics button is visible", async () => {
    render(<App />);

    expect(screen.getByText("Topics")).toBeVisible();
  });

  test("The topic sidebar is not present", async () => {
    render(<App />);

    expect(screen.queryByText("Create New Topic")).not.toBeInTheDocument();
  });

  test("The navbar and main content have the ml-0 class", async () => {
    render(<App />);

    expect(screen.getByTestId("app-main-screeen")).toHaveClass("ml-0");
  });
});

describe("When the topic button in the navbar is clicked...", () => {
  test("The topics button is still visible", async () => {
    render(<App />);
    fireEvent(
      screen.getByText("Topics"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByText("Topics")).toBeVisible();
  });

  test("The topic sidebar is displayed", async () => {
    render(<App />);
    fireEvent(
      screen.getByText("Topics"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByText("Create New Topic")).toBeVisible();
  });

  test("The navbar and main content have the ml-64 class", async () => {
    render(<App />);
    fireEvent(
      screen.getByText("Topics"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByTestId("app-main-screeen")).toHaveClass("ml-64");
  });
});

describe("When the topic button in the navbar is clicked and then clicked again...", () => {
  test("The topics button is visible", async () => {
    render(<App />);
    fireEvent(
      screen.getByText("Topics"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    fireEvent(
      screen.getByText("Topics"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByText("Topics")).toBeVisible();
  });

  test("The topic sidebar is not present", async () => {
    render(<App />);
    fireEvent(
      screen.getByText("Topics"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    fireEvent(
      screen.getByText("Topics"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.queryByText("Create New Topic")).not.toBeInTheDocument();
  });

  test("The navbar and main content have the ml-0 class", async () => {
    render(<App />);
    fireEvent(
      screen.getByText("Topics"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    fireEvent(
      screen.getByText("Topics"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByTestId("app-main-screeen")).toHaveClass("ml-0");
  });
});

describe("When the topic button in the navbar is clicked and then the main app content section is clicked...", () => {
  test("The topics button is visible", async () => {
    render(<App />);
    fireEvent(
      screen.getByText("Topics"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    fireEvent(
      screen.getByTestId("app-main-content"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByText("Topics")).toBeVisible();
  });

  test("The topic sidebar is not present", async () => {
    render(<App />);
    fireEvent(
      screen.getByText("Topics"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    fireEvent(
      screen.getByTestId("app-main-content"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.queryByText("Create New Topic")).not.toBeInTheDocument();
  });

  test("The navbar and main content have the ml-0 class", async () => {
    render(<App />);
    fireEvent(
      screen.getByText("Topics"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    fireEvent(
      screen.getByTestId("app-main-content"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByTestId("app-main-screeen")).toHaveClass("ml-0");
  });
});

describe("When the application is initially rendered and then the main app content section is clicked...", () => {
  test("The topics button is visible", async () => {
    render(<App />);
    fireEvent(
      screen.getByTestId("app-main-content"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByText("Topics")).toBeVisible();
  });

  test("The topic sidebar is not present", async () => {
    render(<App />);
    fireEvent(
      screen.getByTestId("app-main-content"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.queryByText("Create New Topic")).not.toBeInTheDocument();
  });

  test("The navbar and main content have the ml-0 class", async () => {
    render(<App />);
    fireEvent(
      screen.getByTestId("app-main-content"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByTestId("app-main-screeen")).toHaveClass("ml-0");
  });
});

describe("When the topic button in the navbar is clicked and then close button in the topic sidebar is clicked...", () => {
  test("The topics button is visible", async () => {
    render(<App />);
    fireEvent(
      screen.getByText("Topics"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    fireEvent(
      screen.getByText("×"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByText("Topics")).toBeVisible();
  });

  test("The topic sidebar is not present", async () => {
    render(<App />);
    fireEvent(
      screen.getByText("Topics"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    fireEvent(
      screen.getByText("×"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.queryByText("Create New Topic")).not.toBeInTheDocument();
  });

  test("The navbar and main content have the ml-0 class", async () => {
    render(<App />);
    fireEvent(
      screen.getByText("Topics"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    fireEvent(
      screen.getByText("×"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByTestId("app-main-screeen")).toHaveClass("ml-0");
  });
});