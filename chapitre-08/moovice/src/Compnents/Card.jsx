import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="container col-4 ">
                <p >title:{this.props.title}</p>
                <p>Description:{this.props.description}</p>
                <p>Date de Sortie: {this.props.date}</p>
                <p> {this.props.image}</p>


            </div >
        );
    }
}

export default Card;
