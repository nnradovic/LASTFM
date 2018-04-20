import Artist from './../enitites/Artist'
import Albums from '../enitites/Albumsent';
import Songs from '../enitites/Songs';

class ApiService{

  

 
    getArtist(){

        return fetch( ' http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=disco&api_key=753190c6ac1d308253bcec74d16536cb&format=json')
        .then(response => {
            return response.json()
            
            
        })
        .then(artists => {
            console.log(artists.topartists.artist);
            return artists.topartists.artist.map((artist) => {
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
   
   
    getSongs(artist,album){
    
      console.log(artist);
      
        return fetch( `http://ws.audioscrobbler.com//2.0/?method=album.getinfo&api_key=753190c6ac1d308253bcec74d16536cb&artist=${artist}&album=${album}&format=json`)
        .then(response => {
            return response.json()
        })
        .then(songs => {
            console.log(typeof songs.album);
            if( !!songs.album === false){

               return this.getSongs(artist,album)
                
            }else{
                
                let sngs = songs.album.tracks.track.map((song) => {
                    return new Songs(song);
                })
                return sngs 
            }


            
          })
        
    
    }

    getText(artist){
        return fetch( `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=753190c6ac1d308253bcec74d16536cb`)
        .then(response => response.text())
        .then((str) => (new window.DOMParser()).parseFromString(str, "text/xml"))
        
        
  
      
       }
    getSearch(album){
        return fetch( `http://ws.audioscrobbler.com//2.0/?method=album.search&album=${album}&api_key=753190c6ac1d308253bcec74d16536cb&format=json`)
        .then(response => {
            return response.json()
        })
        .then(albums => {
            console.log(albums.results.albummatches.album);
            return albums.results.albummatches.album.map((album) => {
                return new Albums(album);
            })
            
          })
    }

}
export const  apiService = new ApiService() 

