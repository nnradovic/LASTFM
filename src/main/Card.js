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
                // return summary
                // this.setState({
                //     summary:summary
                // })
                
            })
            
        }
                     


    render() {
   
        let artists = this.props.artists;

        return (
            <Fragment >            
                {artists.map((artist, index) =>
                    <CardBox id={artist.name}  key={index}>         
                        <div className="front" onMouseEnter={this.onHandleHover} id={artist.name} >  <p> {artist.name}  Rank:{artist.rank}  </p> <img   src={artist.image} id={artist.name} /> </div>
                        <div className=" back "  ><p> {this.state.summary}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce justo felis, aliquet ac posuere a, pretium et odio. Cras non sem eget turpis aliquet vulputate. Suspendisse potenti. Aliquam pulvinar nulla in velit rhoncus, sed blandit leo pellentesque. Nullam vehicula efficitur risus, nec turpis duis. </p>
                            <Link to={`/albums/${artist.name}`} ><button className="btn btn-danger">Albums</button> </Link>
                        </div>
                    </CardBox>
                )}
            </Fragment>
        )
    }

}

export default Card