import React from 'react';


class Counter extends React.Component {

    render(props) {
        return (
            <div>
                <h1>Counter</h1>

                <button className="btn" onClick={this.props.addFunction} >+</button> <br />


                <h2 >{this.props.muFunc}</h2>

                <button className="btn1" onClick={this.props.removeFunction} >-</button>








                {/* <button className="btn" onClick={this.props.addFunction} >+</button> <br />


                <h2>{this.props.muFunc2}</h2>

                <button className="btn1" onClick={this.props.removeFunction2} >-</button>
 */}













            </div>

        );
    }


}
// marginLeft: "20px", fontSize: "40px"
// style={{ backgroundColor: "red", borderRadius: "50%", border: "none", outline: "none", padding: "15px", margin: "10px" }}
// backgroundColor: "green", margin: "10px", borderRadius: "50%", border: "none", outline: "none", padding: "15px"





export default Counter;