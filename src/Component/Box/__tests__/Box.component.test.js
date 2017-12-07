import React from "react";
import Box from "../Box.component";
import renderer from "react-test-renderer";
import {shallow} from "enzyme";

test("Box: snapshot test", () => {

    const titacto = [

        {
            "value": [
                "o",
                "x",
                "o"
            ],
            "key": "xyz"
        },
        {
            "value": [
                "x",
                "x",
                "o"
            ],
            "key": "abc"
        },
        {
            "value": [
                "o",
                "x",
                "x"
            ],
            "key": "yot"
        }
    ];
    const snapshot = renderer.create(<Box data={titacto}/>);
    expect(snapshot).toMatchSnapshot();

});


test("Box.cellClickHandler", () => {

    const titacto = [
        {
            "value": [
                "o",
                "x",
                "o"
            ],
            "key": "xyz"
        },
        {
            "value": [
                "x",
                "x",
                "o"
            ],
            "key": "abc"
        },
        {
            "value": [
                "o",
                "x",
                "x"
            ],
            "key": "yot"
        }
    ];
    const box = shallow(<Box data={titacto}/>).instance();
    expect(box.cellclickHandler("X")()).toBe("X");
    expect(box.cellclickHandler("O")()).toBe("O");

});
