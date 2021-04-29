import React, { Component } from 'react';



class Add extends React.Component {
    constructor() {
        super()
        this.state = {
            productName: "",
            price: 1,
            min: 1,
            max: 10
        }
    }

    updateProductName = (e) => {

        this.setState({
            productName: e.target.value


        })
    }
    updatePrice = (e) => {
        this.setState({
            price: e.target.value

        })
    }
    render() {

        return (
            <div className="  ">
                <input className="rounded p-1 col-sm-3 " placeholder="search" type="text"
                    onChange={this.updateProductName}


                />
                <button className="btn btn-success m-2 mb-3" onClick={() => this.props.addItem(this.state.productName, this.state.price)}>Add</button>
                <div>
                    <input className="col-md-4" type="range"
                        min={this.state.min}
                        max={this.state.max}

                        onChange={this.updatePrice}


                    />
                </div>

            </div>
        )
    }

}

export default Add;