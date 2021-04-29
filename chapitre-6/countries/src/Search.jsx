import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div className="container col-4">
                <p className="m-2 font-weight-bold">Country</p>
            
                    <input className="form-control mt-4 m-2" onChange={this.props.findCountry} type="text" placeholder="Search" id="country" />
                    <div><button className="btn btn-primary m-2 w-25 " onClick={() => this.props.oneCountry()}>Search...</button></div>

                

            </div>
        )
    }

}
export default Search;