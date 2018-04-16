import Artist from './../enitites/Artist'
class ApiService{
 
    getArtist(){

        return fetch( ' http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=753190c6ac1d308253bcec74d16536cb&format=json')
        .then(response => {
            return response.json()
        })
        .then(artists => {
            console.log(artists.artists.artist);
            return artists.artists.artist.map((artist) => {
                return new Artist(artist);
            })
            
          })
        
    
    }


   


}
export const  apiService = new ApiService() 