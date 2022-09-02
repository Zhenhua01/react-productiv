import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditableTodo from "./EditableTodo";



const todo = {
  id: 3,
  title: "Go to bed",
  description: "In bed by 11:15",
  priority: 3,
};
describe("tests EditableTodo Component", function () {


  it("populates correctly", function () {
    const { container, debug } = render(<EditableTodo todo={todo} />);


    expect(container.querySelectorAll('button').length).toEqual(2);
    expect(container).toContainHTML("Go to bed");
    expect(container).toContainHTML("(priority: 3)");
    expect(container).toContainHTML("In bed by 11:15");

  });


  it("test triggering edit button", function () {
    const { container, debug } = render(<EditableTodo todo={todo} />);

    const editButton = container.querySelector(".EditableTodo-toggle");
    fireEvent.click(editButton);
    const form = container.querySelector('.NewTodoForm');
    expect(form).toBeTruthy();


  });
  // TODO:delete todo
  it("test triggering delete button", function () {

    const { container, debug } = render(<EditableTodo todo={todo} />);

    const deleteButton = container.querySelector(".EditableTodo-delBtn");
    fireEvent.click(deleteButton);

    expect(container.querySelector('.NewTodoForm')).toBeFalsy();

    debug();
  });

});

