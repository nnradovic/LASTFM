import React, {Component, Fragment} from 'react'
import {apiService} from './../service/ApiService'


class Main extends Component{
   constructor(props){
       super(props)
       this.state={
           artists:[]
       }
    }
    componentDidMount() {
        apiService.getArtist()
        .then(artistsObj => {
            this.setState({
                artists:artistsObj
               })
            console.log(artistsObj);
          })

        
          
    
    }

   render(){
   console.log(this.state.artists);
   
       return(
            <Fragment>
          <h1>MAin Page</h1>
          { <p>{this.state.artists.map(artist=> <div> <p>{artist.name}</p> <img src={artist.image}/> </div> )}</p> }
          </Fragment>
       )
   }


}


export default Main