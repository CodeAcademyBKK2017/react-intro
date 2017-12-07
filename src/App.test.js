import renderer from "react-test-renderer";
import React from "react";
import App from "./App";

test("App: snapshot test", () => {
    const snapshot = renderer.create(<App />);
    expect(snapshot).toMatchSnapshot();
});
