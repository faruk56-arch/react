import React from 'react';

class Card extends React.Component {


    render() {
        return (
            <div>
                <p>Here is your Country</p>
                <p><img  className="col-6 mb-4"  src={this.props.flag} alt="" /></p>
                <p>  {this.props.name}</p>
                <p>  {this.props.capital}</p>
                <p> {this.props.population}</p>
                <p>{this.props.region}</p>


            </div>
        )
    }
}
export default Card;