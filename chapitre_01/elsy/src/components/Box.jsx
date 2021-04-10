




import React from "react";

class Box extends React.Component {
  render() {
    return (
      <div className={"box col-sm-2 col-6"} style={{ textAlign: "center",margin: "10px"}}>
        <span className="material-icons" style={{fontSize:"100px",margin: "10px", color: this.props.color}}>{this.props.icon}</span>

        <p>{this.props.value}{this.props.unit}{this.props.bar}</p>
        
      </div>
    );
  }
}

export default Box;