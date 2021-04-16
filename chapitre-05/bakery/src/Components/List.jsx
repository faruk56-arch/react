
import React from 'react';



class List extends React.Component {


    render() {
        // const list =  this.props.toto.map(x => x.name, x=>x.price)
        return (
            <div className="p-4 ">

                <ul>

                    {this.props.toto.map((x) => <li>{x.name }</li>)}
                </ul>




            </div>
        )
    }


}

export default List;