
import React, { Component } from 'react';
import Card from './Card';
// import moment from 'moment';



var moment = require("moment");

class Weekly extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }
    
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e441f8a3a151d588a4932d2c5d310769")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movies: data.results
                })
                
            })
            function formatDate(dateString) {
                console.log(moment(dateString).format("DD/MM/YYYY"));
        
            // moment().subtract(10, 'days').calendar();
        }
        
    }

    // poster_path={"https://image.tmdb.org/t/p/w300" + this.state.movies[0].poster_path}
    render() {
        return (
            <div>
                <ul >
                    {this.state.movies.map((elem) => {
                        return <li key={elem.title}>
                            <Card
                                title={elem.title}
                                release_date={elem.release_date}
                                overview={elem.overview}
                                poster_path={"https://image.tmdb.org/t/p/w300" + elem.poster_path}
                            />
                        </li>

                    })}


                </ul>

            </div>
        );
    }
}

export default Weekly;

