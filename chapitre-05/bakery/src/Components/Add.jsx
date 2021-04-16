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
            <div className="p-4  ">
                <input className="rounded" placeholder="search" type="text"
                    onChange={this.updateProductName}


                />
                <input type="range"
                    min={this.state.min}
                    max={this.state.max}

                    onChange={this.updatePrice}


                />
                <button onClick={() => this.props.addItem(this.state.productName, this.state.price)}>ADD</button>
            </div>
        )
    }

}

export default Add;