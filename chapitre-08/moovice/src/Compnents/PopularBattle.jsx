import React, { Component } from 'react';
import Card from './Card'

class PopularBattle extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            indexFirstMovieOfCurrentBattle: 0

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

        // console.log("message", this.state.movies[0]);
    }
    updateIndexMovieBattle = (movieId) => {
        console.log("updateIndexMovieBattle", typeof movieId);

        const idsFavorites = JSON.parse(localStorage.getItem("favorites")) || []

        console.log("idsFavorites", idsFavorites);

        // if (!idsFavorites.find(elem => elem === movieId)) {
        if (!idsFavorites.includes(movieId)) {
            idsFavorites.push(movieId)

            localStorage.setItem("favorites", JSON.stringify(idsFavorites))
        }

        this.setState({
            indexFirstMovieOfCurrentBattle: this.state.indexFirstMovieOfCurrentBattle + 2
        })
    }
    renderTwoMovies() {
        const { indexFirstMovieOfCurrentBattle } = this.state

        return (
            <div className="container ">
                <div className="row">
                    <div className="col-6" style={{ cursor: "pointer" }}
                        onClick={() => this.updateIndexMovieBattle(this.state.movies[indexFirstMovieOfCurrentBattle].id)}>
                        <Card
                            title={this.state.movies[indexFirstMovieOfCurrentBattle].title}
                            poster_path={"https://image.tmdb.org/t/p/w300" + this.state.movies[indexFirstMovieOfCurrentBattle].poster_path}
                            release_date={this.state.movies[indexFirstMovieOfCurrentBattle].release_date}
                            overview={this.state.movies[indexFirstMovieOfCurrentBattle].overview}
                        />
                    </div>
                    <div className="col-6" style={{ cursor: "pointer" }}
                        onClick={() => this.updateIndexMovieBattle(this.state.movies[indexFirstMovieOfCurrentBattle + 1].id)}>
                        <Card
                            title={this.state.movies[indexFirstMovieOfCurrentBattle + 1].title}
                            poster_path={"https://image.tmdb.org/t/p/w300" + this.state.movies[indexFirstMovieOfCurrentBattle + 1].poster_path}
                            release_date={this.state.movies[indexFirstMovieOfCurrentBattle + 1].release_date}
                            overview={this.state.movies[indexFirstMovieOfCurrentBattle + 1].overview}
                        />
                    </div>
                </div>
            </div>
        )
    }



    render() {
        return (
            <div>
                <h1 className="text-center">Popular Battle</h1>


                {this.state.indexFirstMovieOfCurrentBattle > 19
                    ? "Vous avez parcouru tous les films "
                    : <div className="row">
                        {this.state.movies.length !== 0
                            ? this.renderTwoMovies()
                            : "Please wait until the movies are loaded"
                        }
                    </div>
                }


            </div>
        );
    }
}

export default PopularBattle;
