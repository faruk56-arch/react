import React from 'react';


class Card extends React.Component {
    constructor() {
        super()
        this.state = {
            image: "http://localhost:3000/images/item.png"
        }
    }
    componentDidMount() {
        const Url = "https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/" + this.props.productName + ".png";
        console.log(Url);
        fetch(Url)
            .then(response => response.blob())
            .then(result => {
                const transform = URL.createObjectURL(result)
                console.log("Données", transform);
                console.log("message", result);

                this.setState({
                    image: transform
                })
            })

    }
    render() {
        // utilisation des props
        // { this.props.productName }
        // { this.props.price }
        // { this.props.onClick }
        return (
            <div>
                <button onClick={this.props.onClick(this.props.productName, this.props.price)}>
                    <img src={this.state.image} alt="image" />
                </button>
            </div>
        )
    }
}
export default Card;