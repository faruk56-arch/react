




import React from "react";


class Box extends React.Component {




  render() {


    const onOlder = () => {
      if (this.props.unit !== "L") {
        return <input type="range" min={this.props.min} max={this.props.max}
          value={this.props.value}
          onInput={this.props.handleInput}></input>

      }
    }



    return (

      <div className={"box col-sm-2 col-6"} style={{ textAlign: "center", margin: "10px" }}>
        <span className="material-icons" style={{ fontSize: "100px", margin: "10px", color: this.props.color }}>{this.props.icon}</span>

        {/* <p>{this.props.value}{this.props.unit}{this.props.bar}</p> */}
        <p>{this.props.value}</p>

        <div>
          {onOlder()
          }
        </div>
      </div>


    );
  }

}

export default Box;