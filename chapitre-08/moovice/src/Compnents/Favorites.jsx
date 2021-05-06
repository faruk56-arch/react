import React, { Component } from 'react';

class Favorites extends Component {
    render() {
        console.log(localStorage.getItem('favorites'));
        return (
            <div>
                Favorites
            </div>
        );
    }
}

export default Favorites;
