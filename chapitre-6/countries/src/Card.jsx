import React from 'react';

class Card extends React.Component {


    render() {
        return (
            <div>
                <p>Here is your Country</p>
                <p><img className="col-8 mb-4" src={this.props.flag} alt="" /></p>
                <p>Country:  {this.props.name}</p>
                <p>Capital:   {this.props.capital}</p>
                <p>population: {this.props.population}</p>
                <p>Region:  {this.props.region}</p>


            </div>
        )
    }
}
export default Card;