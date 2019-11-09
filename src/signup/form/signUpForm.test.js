import React from "react";
import { SignUpForm } from "./signUpForm";
import renderer from "react-test-renderer";

// it("SignUpForm renders correctly", () => {
//     const tree = renderer.create(<SignUpForm />).toJSON();
//     expect(tree).toMatchSnapshot();
// });

it("SignUpForm renders correctly", () => {
    const tree = renderer
        .create(<SignUpForm signUp={() => ({ preventDefault: () => {} })} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
