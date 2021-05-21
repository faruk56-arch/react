import React, { Component } from 'react';

class Favorites extends Component {
    constructor() {
        super();
        //ici j'ai créé le state
        this.state = {
            movies: [],
            favIDs: this.getStorage() // ici j'ai appelé la methode getStorage
        }
    }
    getStorage() {
        // j'ai pas compris
        const Favorites = JSON.parse(localStorage.getItem("favorites"))
        console.log("mesage ltype", typeof (localStorage.getItem("favorites")));
        console.log("type of favorites", typeof (Favorites));
        return Favorites

    }
    getMovie(id) {
        // j'ai stocké API KEY dans une constente//
        const API_KEY = "e441f8a3a151d588a4932d2c5d310769";
        // j'ai construie une url avec des variable en ES6
        const url = `http://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
        // j'ai envoyé une requete en utilisant url avec la methode fetch et la reponse se trouve dans la methode .then
        fetch(url)
            .then(response => response.json())
            .then(data => {
                //Recuperation la reponse de la requete dans le variable data 
                // En Modifiant state movies en ajoutant nouveu film au tableu movies sans supprimer les aniciens
                this.setState({
                    movies: [...this.state.movies, data]
                })
            })
    }
    componentDidMount() {
        // Dans la methode je utilisé la methode map pour recuperer les ID de movies
        // Je parcours le table favIDs avec la methode map qui me parmette de recuperer un element chaque tour ensuite j'exicute la methode getMovie en lui passant element courant 
        this.state.favIDs.map(element => {
            return this.getMovie(element)
        })
    }
    render() {
        // console.log(localStorage.getItem('favorites'));
        return (
            <div>
            </div>
        );
    }
}

export default Favorites;
