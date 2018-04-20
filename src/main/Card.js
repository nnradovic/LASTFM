import React, { Component, Fragment } from 'react'
import { CardBox } from './Card.style';
import { Link } from 'react-router-dom';
import { apiService } from './../service/ApiService'

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            summary: []
        }

    }

    onHandleHover(e) {
   
        apiService.getText()
            .then(data => {
                // console.log(data.childNodes[0].childNodes[0].childNodes[28].childNodes[4].innerHTML)
                // console.log(data.childNodes[0].childNodes[0].childNodes[0])
                
                
                // this.setState({
                //     summary:e.target.id
                // })
                
                return data
                
            }).then(data =>{
                // this.setState({
                //     summary: data.childNodes[0].childNodes[0].childNodes[28].childNodes[4].innerHTML
                // })
              
                
            }
            )
    }



    render() {
        console.log(this.props.artists);
        let artists = this.props.artists;

        
        return (
            <Fragment >

                {artists.map((artist, index) =>

                    <CardBox id={artist.name}  >
                        
                      
                        <div className="front" onMouseEnter={this.onHandleHover}>  <p>{artist.name} {artist.rank}  </p><img src={artist.image} /> </div>
                        <div className=" back " ><p> Molimo vas napravite novi GitHub repo i korisite da tamo postavite rešenje zadatka zajedno sa uputstvom za pokretanje. Takođe vas molimo da nam link ka GitHub repu pošaljete uz prijavu za posao. </p>
                            <Link to={`/albums/${artist.name}`} ><button className="btn btn-danger">Albums</button> </Link>
                        </div>
                    </CardBox>
                )}




            </Fragment>
        )
    }

}

export default Card