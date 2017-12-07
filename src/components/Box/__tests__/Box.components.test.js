import renderer from "react-test-renderer";
import React from "react";
import Box from "../Box.components";
import {shallow} from "enzyme";

test("Box: snapshot test", () => {
    const titacto = [
        {
            "arr": [
                "O",
                "X",
                "O"
            ],
            "key": "a"
        },
        {
            "arr": [
                "X",
                "O",
                "O"
            ],
            "key": "b"
        },
        {
            "arr": [
                "X",
                "X",
                "O"
            ],
            "key": "c"
        }
    ];
    const snapshot = renderer.create(<Box rowData={titacto}/>);
    expect(snapshot).toMatchSnapshot();
});


test("Box.cellClickHandler", () => {
    const titacto = [
        {
            "arr": [
                "O",
                "X",
                "O"
            ],
            "key": "a"
        },
        {
            "arr": [
                "X",
                "O",
                "O"
            ],
            "key": "b"
        },
        {
            "arr": [
                "X",
                "X",
                "O"
            ],
            "key": "c"
        }
    ];
    const box = shallow(<Box rowData={titacto}/>).instance();
    expect(box.cellClickHandler("X")()).toBe("X");
    expect(box.cellClickHandler("O")()).toBe("O");
});
