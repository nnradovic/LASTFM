import React, { Component, Fragment } from 'react'
import { CardBox } from './Card.style';
import { Link } from 'react-router-dom';
import { apiService } from './../service/ApiService'

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            summary: ' '
        }

    }

    onHandleHover(e) {
    //    console.log(e.target.getAttribute("id"));
       
        apiService.getText(e.target.getAttribute("id"))
            .then(data => {
                if(data.about.length>300){
                    let new300 = data.about.slice(0,300);
                    let dot = new300.lastIndexOf('.');
                    let newText = new300.slice(0,dot+1);
                    return newText
                }
            })
            .then(summary =>{
                return summary
                console.log(summary);
                // this.setState({
                //     summary:summary
                // })
            })
            
        }
                     


    render() {
        console.log(this.props.artists);
        let artists = this.props.artists;

        
        return (
            <Fragment >

                {artists.map((artist, index) =>

                    <CardBox id={artist.name}  >
                        
                      
                        <div className="front" onMouseEnter={this.onHandleHover} id={artist.name} >  <p> {artist.name}  Rank:{artist.rank}  </p> <img   src={artist.image} id={artist.name} /> </div>
                        <div className=" back "  ><p> Molimo vas napravite novi GitHub repo i korisite da tamo postavite rešenje zadatka zajedno sa uputstvom za pokretanje. Takođe vas molimo da nam link ka GitHub repu pošaljete uz prijavu za posao. </p>
                            <Link to={`/albums/${artist.name}`} ><button className="btn btn-danger">Albums</button> </Link>
                        </div>
                    </CardBox>
                )}




            </Fragment>
        )
    }

}

export default Card