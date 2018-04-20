import React, { Component, Fragment } from 'react'
import { AlbumBox } from './Albums.style';
import { apiService } from './../service/ApiService';
import ListSongs from './ListSongs';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Loading from './Loading'
import { Link } from 'react-router-dom'
import './Albums.css'
import debounce from 'lodash/debounce'
class Albums extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albums: [],
            page: 1,
            songs: [],
            albumId: ''
        }

        console.log(this.props);

    }

    componentDidMount() {
        apiService.getTopAlbums(this.props.match.params.id)
            .then(albumsObj => {
                this.setState({
                    albums: albumsObj,
                    album: {}

                })
                console.log(this.props.match.params.id)
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
        // console.log(this.props.match.params.id);
        // console.log(e.target.id);
        // console.log(this.state.albumsId);



        apiService.getSongs(this.props.match.params.id, e.target.id)
            .then(songsObj => {
                this.setState({
                    // albumId: e.target.id,
                    songs: songsObj,
                })

            })


    }
   

    handleScroll = () => {

        let contentHeight = document.body.offsetHeight
        console.log(contentHeight);

        let yOffset = window.pageYOffset;
        //   console.log(window.pageYOffset);

        let y = yOffset + window.innerHeight;
        console.log(y);

        if (y > contentHeight) {
            //  alert("DNO STRANE")
            // this.fetchTen()
            // window.scroll(0,y-200)

        }

    }
    onHandleChange = debounce(((searchInput) => {
        apiService.getSearch(searchInput).then(query => {
            this.setState({
                albums: query,
              
            })
        })
    }), 1000);



    render() {
        console.log(this.state.songs);
        let albums = this.state.albums;
        let songs = this.state.songs;
        window.addEventListener('scroll', this.handleScroll)
        if (this.state.albums.length === 0) {
            return <Loading />
        }
        return (
            <Fragment >
                <Header props={this.onHandleChange}/>
                <div className="container" >
                    <Link to={`/`} ><button className="btn btn-danger">Back To Author</button> </Link>
                    <div className="row">
                        {albums.map((album, index) =>

                            <AlbumBox id={album.name} >

                                <div className="front" id={album.name} onMouseEnter={this.hoverCall} >   <p>{album.name} </p> <img src={album.image} id={album.name} />  </div>
                                <div className="back" id={album.name} >  <ul>

                                    {songs.map(song => <ListSongs props={song} />)}

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