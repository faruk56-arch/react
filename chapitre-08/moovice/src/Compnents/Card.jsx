import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (

            <div className="text-center">
                <img src={this.props.poster_path} />
                <p > title:{this.props.title}</p>
                <p> Date de sortie: {this.props.release_date}</p>
                <p> Description: {this.props.overview}</p>
            </div>


        );
    }
}

export default Card;
