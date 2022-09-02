import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";
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
describe("basic rendering", function () {


  it("renders without crashing", function () {
    render(<TopTodo todos={todos} />);

  });

  it("renders correct todo", function () {
    const { container, debug } =
      render(<TopTodo todos={todos} />);
    debug();
    const todo = container.querySelector('.Todo');
    expect(todo).toContainHTML("Make dinner");

  });

  it("matches snapshot", function () {
    const { container } =
      render(<TopTodo todos={todos} />);
    expect(container).toMatchSnapshot();

  });


});