import Cell from "../Cell.component";
import React from "react";
import renderer from "react-test-renderer";
test("Cell: snapshot test", () => {

    const cell = "X";
    const xx = () => { };
    const snapshot = renderer.create(<Cell value={cell} cellclickHandler={xx}/>).toJSON();
    expect(snapshot).toMatchSnapshot();

});
