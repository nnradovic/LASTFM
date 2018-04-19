import React, { Component, Fragment } from 'react'
import { AlbumBox } from './Albums.style';
import { apiService } from './../service/ApiService';
// import {Link} from 'recat-router-dom'
class Albums extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albums: [],
            page:1,
            songs:[]
        }
    }

    componentDidMount() {
        this.fetchTen()
        apiService.getTopAlbums(this.props.match.params.id)
        .then(albumsObj => {
            this.setState({
                albums:albumsObj,
               
                
            })
            
        })
    }
    
    fetchTen() {
let x = window.scrollTo(0,window.innerHeight)
console.log(window.pageYOffset);

         if(window.pageYOffset ===769){
             console.log('dole');
             
            apiService.getTopAlbums(this.props.match.params.id, this.state.page)
                .then(albumsObj => {
                    this.setState({
                        albums:albumsObj,
                        page:this.state.page+1,
                        
                    })
                    console.log(albumsObj);
                })
        }
    }

        hoverCall(){
        apiService.getSongs()
        .then(songsObj=>{
            console.log(songsObj);
            // this.setState({
            //   songs:songsObj
            // })
        })
      
           
        
    }
   


    render() {
        console.log(this.state.songs);

        let albums = this.state.albums;
        return (
            <Fragment >
                <div className="container">
          <div className="row">
                {albums.map((album, index) =>

                    <AlbumBox onMouseOver={this.hoverCall}>

                        <div className=" front ">   <p>{album.name} <img src={album.image} /> Prednja </p> </div>
                        <div className=" back " >  <ul>
                            {this.state.songs.map(song=>{
                                <a href={song.url}><li>{song.rank} {song.name}</li></a>
                            })}
                            
                        </ul>
                        </div>
                    </AlbumBox>
                )}
                </div>
                </div>





            </Fragment>
        )
    }

}

export default Albums