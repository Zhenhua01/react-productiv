import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

describe("basic rendering", function () {


  it("renders without crashing", function () {
    const result = render(<Todo id={1}
      title={"nope"}
      description={"nope description"}
      priority={1} />);

    expect(result.queryByText("nope")).toBeInTheDocument();
  });

  it("matches snapshot", function () {
    const { container } =
      render(
        <Todo id={1}
          title={"nope"}
          description={"nope description"}
          priority={1}

        />
      );
    expect(container).toMatchSnapshot();

  });


});

