import React, { Component, Fragment } from 'react'
import { CardBox } from './Card.style';
import { Link } from 'react-router-dom';


class Card extends Component {
    constructor(props) {
        super(props)
     
    }

 


    render() {
        // console.log(this.state.albums);
        let artists = this.props.artists;
        return (
            <Fragment >

                {artists.map((artist, index) =>

                    <CardBox>
                        <div className=" front "><p>{artist.name} <img src={artist.image} /> </p> </div>
                        <div className=" back "><p> Molimo vas napravite novi GitHub repo i korisite da tamo postavite rešenje zadatka zajedno sa uputstvom za pokretanje. Takođe vas molimo da nam link ka GitHub repu pošaljete uz prijavu za posao. </p> 
                        <Link to={`/albums/${artist.name}`} ><button   className="btn btn-danger">Albums</button> </Link>
                        </div>
                    </CardBox>
                )}




            </Fragment>
        )
    }

}

export default Card