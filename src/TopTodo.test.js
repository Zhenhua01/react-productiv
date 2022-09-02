import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TopTodo from "./TopTodo";
import TodoApp from "./TodoApp";

const todos = [
  {
    id: 1,
    title: "Code!",
    description: "Write some code",
    priority: 2,
  },
  {
    id: 2,
    title: "Make dinner",
    description: "Cook something healthy",
    priority: 1,
  },
  {
    id: 3,
    title: "Go to bed",
    description: "In bed by 11:15",
    priority: 3,
  },
];

describe("test TopTodo", function () {

  it("renders without crashing", function () {
    render(<TopTodo todos={todos} />);

  });

  it("matches snapshot", function () {
    const { container } =
      render(<TopTodo todos={todos} />);
    expect(container).toMatchSnapshot();

  });

  it("renders correct todo", function () {
    const { container } =
      render(<TopTodo todos={todos} />);

    const todo = container.querySelector('.Todo');
    expect(todo).toContainHTML("Make dinner");

  });

  it("checks Top Todo is empty", function () {
    const { container } =
      render(<TodoApp initialTodos={[]} />);

    const todo = container.querySelector('.TodoApp');
    expect(todo).not.toContainHTML("Top Todo");

  });

  // it("Top Todo changes when priority changes", function () {
  //   const { container } =
  //     render(<TodoApp initialTodos={todos} />);

  //   const todo = container.querySelectorAll('.Todo');
  //   expect(todo).toContainHTML("Make dinner");


  // });

});