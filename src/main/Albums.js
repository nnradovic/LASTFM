import React, { Component, Fragment } from 'react'
import { AlbumBox } from './Albums.style';
import { apiService } from './../service/ApiService';
import ListSongs from './ListSongs';
import Search from '../partials/Search';
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


            }).then(
            window.scrollTo(0, 0)
            )
    }

    componentDidUpdate() {
        this.hoverCall

    }

    hoverCall = (e) => {



        apiService.getSongs(this.props.match.params.id, e.target.getAttribute("id"))
            .then(songsObj => {
                this.setState({

                    songs: songsObj,
                })

            })
            

    }


    // handleScroll = (e) => {

    //     let contentHeight = document.body.offsetHeight


    //     let yOffset = window.pageYOffset;


    //     let y = yOffset + window.innerHeight;


    //     if (y > contentHeight) {
    //         alert("DNO STRANE")
    //         return this.fetchTen()


    //     }

    // }
    onHandleChange = debounce(((searchInput) => {
        apiService.getSearch(searchInput).then(query => {
            this.setState({
                albums: query,

            })
        })
    }), 1000);



    render() {
       
        let albums = this.state.albums;
        let songs = this.state.songs;
        window.addEventListener('scroll', this.handleScroll)
        if (this.state.albums.length === 0) {
            return <Loading />
        }
        return (
            <Fragment >
                <Search props={this.onHandleChange} />
                <div className="container" >
                    <Link to={`/`} ><button className="btn btn-danger">Back To Author</button> </Link>
                    <div className="row">
                        {albums.map((album, index) =>

                            <AlbumBox id={album.name} key={index}>
                                <div className="front" id={album.name} onMouseEnter={this.hoverCall} key={index} >   <p>{album.name} </p> <img src={album.image} id={album.name} alt="image"/>  </div>
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