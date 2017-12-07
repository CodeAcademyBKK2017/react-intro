import renderer from "react-test-renderer";
import React from "react";
import Row from "../Row.components";

test("Row: snapshot test", () => {
    const titacto = [
        "O",
        "X",
        "O"
    ];
    const snapshot = renderer.create(<Row cellData={ titacto}
        cellClickHandler={() => {}}/>);
    expect(snapshot).toMatchSnapshot();
});
