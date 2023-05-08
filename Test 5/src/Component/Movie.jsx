import { render } from "@testing-library/react";
import React from "react";
class Movie extends React.Component{

    movie_Name ="Thunivu"
    movie_Actor="Ajith Kumar"
    movie_Director ="H.Vinoth"
    movie_Music_Director="Ghibran"
    movie_Produser="Red Giant Movies"
    movie_Image="https://igimages.gumlet.io/tamil/home/thunivu-chillachilla9122022m.jpg?w=376&dpr=2.6"
   
    render(){


        return <div>
            <h1>Movie Component</h1>
            <h3>Movie Name:{this.movie_Name}</h3>
            <h3>Movie Actor:{this.movie_Actor}</h3>
            <h3>Movie Director:{this.movie_Director}</h3>
            <h3>Movie MusicDirector:{this.movie_Music_Director}</h3>
            <h3>Movie Produser:{this.movie_Produser}</h3>
            <img src= {this.movie_Image}/>
        </div>  
    }
}

export default Movie