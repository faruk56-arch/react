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
    }
    handleSelect = (name, price) => {
        console.log(name, price);

    }

    render() {

            console.log(this.props.items);
        return (
            <div className="p-4">Pay
                <Card onClick={() => { }} />
                {this.props.items}
                <div>
                    <p>{this.state.total}</p>

                </div>
                {
                    this.props.items.map((element) => {

                        return <Card
                            productName={element.name}
                            price={element.price}
                            onClick={this.handleSelect}

                        />
                    })
                }
            </div>
        )
    }
}

export default Pay;