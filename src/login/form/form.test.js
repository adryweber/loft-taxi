import React from "react";
import { LoginForm } from "./loginForm";
import renderer from "react-test-renderer";

it("Login Form renders correctly", () => {
    const tree = renderer
        .create(<LoginForm login={() => ({ preventDefault: () => {} })} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
