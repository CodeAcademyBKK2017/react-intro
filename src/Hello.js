import React from "react";
class Hello extends React.Component {

    render () {

        const cel = {
            "background": "rgb(6, 194, 243)",
            "fontSize": " 20px;",
            "color": "#fff",
            "padding": " 25px",
            "marginLeft": "2px",
            "height": "20px",
            "display": "inline-block",
            "border": "1px solid #fff"
        };
        return (
            <div style={{"textAlign": "center"}}>
                <div>
                    <div style={cel}>
                    x
                    </div>
                    <div style={cel}>
                    x
                    </div>
                    <div style={cel}>
                    x
                    </div>
                </div>
                <div>
                    <div style={cel}>
                x
                    </div>
                    <div style={cel}>
                x
                    </div>
                    <div style={cel}>
                x
                    </div>
                </div>
                <div>
                    <div style={cel}>
                x
                    </div>
                    <div style={cel}>
                x
                    </div>
                    <div style={cel}>
                x
                    </div>
                </div>
            </div>


        );

    }

}
export default Hello;
