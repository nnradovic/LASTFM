import React, { Component, Fragment } from 'react'
import { AlbumBox } from './Albums.style';
import { apiService } from './../service/ApiService';
import { BottomScrollListener } from 'react-bottom-scroll-listener';
import ListSongs from './ListSongs';


class Albums extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albums: [],
            page: 1,
            songs: [],
            albumId: ''
        }


    }

    componentDidMount() {
        apiService.getTopAlbums(this.props.match.params.id)
            .then(albumsObj => {
                this.setState({
                    albums: albumsObj,
                    album: {}

                })

            })
    }

    fetchTen() {

        apiService.getTopAlbums(this.props.match.params.id, this.state.page)
            .then(albumsObj => {
                this.setState({
                    albums: albumsObj,
                    page: this.state.page + 1,

                })
                console.log(albumsObj);
            })
    }

    componentDidUpdate() {
        this.hoverCall

    }

    hoverCall = (e) => {
        console.log(this.props.match.params.id);
        console.log(e.target.id);
        
       

        apiService.getSongs(this.props.match.params.id,e.target.id)
            .then(songsObj => {
                this.setState({
                    // albumId: e.target.id,
                    songs: songsObj,
                })
            })
      

    }
    // this.props.match.params.id, this.state.albumId

    handleScroll = () => {




    }

    render() {
        console.log(this.state.songs);
        let albums = this.state.albums;
        let songs = this.state.songs;
        window.addEventListener('scroll', this.handleScroll)
        return (
            <Fragment >
                <div className="container" >
                    <div className="row">
                        {albums.map((album, index) =>

                            <AlbumBox onMouseOver={this.hoverCall} id={album.name} >

                                <div className="front" id={album.name} >   <p>{album.name} <img src={album.image} id={album.name} /> </p> </div>
                                <div className="back" id={album.name} >  <ul>

                                    {songs.map(song => <ListSongs  props={song} />)}

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