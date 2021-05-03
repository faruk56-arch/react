
import React from 'react';



class List extends React.Component {


    render() {
        return (
            <div className="input ">


                <ul >

                    {this.props.toto.map((x) => <li key={x.name} className="list-group-item col-6 rounded d-flex justify-content-between align-items-center">{x.name}<span class="badge badge-primary badge-pill">{x.price}</span></li>)}
                    <button className="delete  btn-danger ">x</button>

                </ul>




            </div>
        )
    }


}

export default List;