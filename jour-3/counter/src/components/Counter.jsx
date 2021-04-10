import React from 'react';


class Counter extends React.Component {

    render(props) {
        return (
            <div>

                <button onClick={this.props.addFunction} style={{ backgroundColor: "red", borderRadius: "50%", border: "none", outline: "none", padding: "15px", margin: "10px" }}>+</button> <br />

                <h2 style={{ marginLeft: "20px", fontSize: "40px" }}>{this.props.muFunc}</h2>

                <button onClick={this.props.removeFunction} style={{ backgroundColor: "green", margin: "10px", borderRadius: "50%", border: "none", outline: "none", padding: "15px" }}>-</button>


            </div>

        );
    }


}





export default Counter;