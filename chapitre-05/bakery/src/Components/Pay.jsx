import React from 'react';
import Card from './Card'


class Pay extends React.Component {

    render() {
        return (
            <div className="p-4">Pay
            <Card onClick={() => {}} productName="croissant"/>
            </div>
        )
    }
}

export default Pay;