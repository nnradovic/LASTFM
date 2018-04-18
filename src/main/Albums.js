import React, { Component, Fragment } from 'react'
import { AlbumBox } from './Albums.style';
import { apiService } from './../service/ApiService';
// import {Link} from 'recat-router-dom'
class Albums extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albums: []
        }
    }

    componentDidMount() {
        apiService.getTopAlbums(this.props.match.params.id)
            .then(albumsObj => {
                // this.setState({
                //     albums:albumsObj
                // })
                console.log(albumsObj);
            })
        apiService.getSongs()
        .then(songsObj=>{
            console.log(songsObj);
            
        })
    }




    render() {
        console.log(albums);

        let albums = this.state.albums;
        return (
            <Fragment >

                {albums.map((album, index) =>

                    <AlbumBox>

                        <div className=" front ">   <p>{album.name} <img src={album.image} /> Prednja </p> </div>
                        <div className=" back ">  <ul>
                            <a href=""></a><li>1.PRva pesma</li>

                        </ul>
                        </div>
                    </AlbumBox>
                )}





            </Fragment>
        )
    }

}

export default Albums