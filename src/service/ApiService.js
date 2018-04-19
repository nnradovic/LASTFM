import Artist from './../enitites/Artist'
import Albums from '../enitites/Albumsent';
import Songs from '../enitites/Songs';

class ApiService{
 
    getArtist(){

        return fetch( ' http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=753190c6ac1d308253bcec74d16536cb&format=json')
        .then(response => {
            return response.json()
        })
        .then(artists => {
            // console.log(artists.artists.artist);
            return artists.artists.artist.map((artist) => {
                return new Artist(artist);
            })
            
          })
        
    
    }

    getTopAlbums(artist, page){

        return fetch( `http://ws.audioscrobbler.com//2.0/?method=artist.gettopalbums&artist=${artist}&api_key=753190c6ac1d308253bcec74d16536cb&format=json&limit=10&page=${page}`)
        .then(response => {
            return response.json()
        })
        .then(albums => {
            // console.log(albums.topalbums.album);
            return albums.topalbums.album.map((album) => {
                return new Albums(album);
            })
            
          })
        
    
    }
   

    getSongs(album){

        return fetch( `http://ws.audioscrobbler.com//2.0/?method=album.getinfo&api_key=753190c6ac1d308253bcec74d16536cb&artist=Cher&album=Believe&format=json`)
        .then(response => {
            return response.json()
        })
        .then(songs => {
            console.log(songs);
            let sngs = songs.album.tracks.track.map((song) => {
                return new Songs(song);
            })

            
            

            return sngs 
            
          })
        
    
    }


}
export const  apiService = new ApiService() 

