import React from 'react';
import Card from './Card'


class Pay extends React.Component {

    constructor() {
        super()
        this.state = {
            basket: [],
            total: 0,
            totalTVA: 0,
            totalEcoTax: 0,
            totalTTC: 0
        }
        this.handleSelect = this.handleSelect.bind(this)
    }
    handleSelect = (name, price) => {
        let total = +price;
        console.log(typeof(price));
        // let totalTval = 20;
        let totalEcoTax = 3;
        let totalTTC = 
        // totalTVA = 
        this.setState({
            basket: [
                name,
                price
            ],
            total: total,
            // totalTVA:totalTVA,
            totalEcoTax:totalEcoTax,
            // totalTTC:totalTTC
        }
        )
    }
    render() {

        console.log("Pay.items", this.props.items);
        console.log("basket", this.state.basket,);
        return (
            <div className="p-4">Pay1
                {/* <Card onClick={() => { }} />
                {this.props.items} */}
                <div>
                    <p>{this.state.total}</p>
                </div>
                {
                    this.props.items.map((element) => {
                        return <Card key={element.name}
                            productName={element.name}
                            price={element.price}
                            onClick={this.handleSelect}
                        />
                    })
                }
                <p>total: {this.state.total}</p>
            </div>
        )
    }
}

export default Pay;