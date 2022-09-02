import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";
import TodoApp from "./TodoApp";


describe("test TopTodo", function () {
  it("renders without crashing", function () {
    const { container } = render(<TodoForm />);

    const todoForm = container.querySelector('.NewTodoForm');
    expect(todoForm).toContainHTML("title");
    expect(todoForm).toContainHTML("description");
    expect(todoForm).toContainHTML("priority");
  });

  it("matches snapshot", function () {
    const { asFragment } = render(<TodoForm />);
    expect(asFragment()).toMatchSnapshot();

  });

  it("can create a new Todo", function () {
    const { container, debug } = render(<TodoApp initialTodos={[]} />);

    expect(container.querySelector(".Todo")).not.toBeInTheDocument();

    const titleInput = container.querySelector("#newTodo-title");
    const descriptionInput = container.querySelector("#newTodo-description");
    const priorityInput = container.querySelector("#newTodo-priority");
    const submitBtn = container.querySelector(".NewTodoForm-addBtn");
    debug();
    // fill out the form
    fireEvent.change(titleInput, { target: { value: "new_todo" } });
    fireEvent.change(descriptionInput, { target: { value: "new_description" } });
    fireEvent.change(priorityInput, { target: { value: 2 } });
    fireEvent.click(submitBtn);

    // item exists!
    const todo = container.querySelector('.Todo');
    expect(todo).toContainHTML("new_todo");
    expect(todo).toContainHTML("new_description");
    expect(todo).toContainHTML("2");

    // form resets
    expect(titleInput).toContainHTML("");
    expect(descriptionInput).toContainHTML("");
    expect(priorityInput).toContainHTML("");

  });

});
