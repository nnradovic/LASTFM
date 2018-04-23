import React, { Component, Fragment } from 'react'
import { apiService } from './../service/ApiService'
import Card from './Card';
import Loading from './Loading'



class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            artists: []
        }
    }
    componentDidMount() {
        apiService.getArtist()
            .then(artistsObj => {
                this.setState({
                    artists: artistsObj
                })

            })
    }
  

    render() {


        if (this.state.artists.length === 0) {
            return <Loading />
        }

        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <Card artists={this.state.artists} />
                    </div>
                </div>
            </Fragment>
        )
    }


}


export default Main