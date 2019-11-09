import React from "react";
import { CardForm } from "./cardForm";
import renderer from "react-test-renderer";

it("Card Form renders correctly", () => {
    const tree = renderer.create(<CardForm />).toJSON();
    expect(tree).toMatchSnapshot();
});
