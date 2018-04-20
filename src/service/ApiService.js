import Artist from './../enitites/Artist'
import Albums from '../enitites/Albumsent';
import Songs from '../enitites/Songs';
import About from '../enitites/About';

class ApiService{

  

 
    getArtist(){

        return fetch( ' http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=disco&api_key=753190c6ac1d308253bcec74d16536cb&format=json')
        .then(response => {
            return response.json()
            
            
        })
        .then(artists => {
            return artists.topartists.artist.slice(0,40).map((artist) => {
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
    
     
        return fetch( `http://ws.audioscrobbler.com//2.0/?method=album.getinfo&api_key=753190c6ac1d308253bcec74d16536cb&artist=${artist}&album=${album}&format=json`)
        .then(response => {
            return response.json()
        })
        .then(songs => {
            console.log(typeof songs.album);
            // if( !!songs.album === false){

            //    return this.getSongs(artist,album)
                
            // }else{
                
                let sngs = songs.album.tracks.track.map((song) => {
                    return new Songs(song);
                })
                return sngs 
            // }


            
          })
        
    
    }

    getText(artist){
        return fetch( `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=753190c6ac1d308253bcec74d16536cb`)
        .then(response => response.text())
        .then((str) => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(text=>{
            // console.log(text.childNodes[0].childNodes[0].childNodes[28].childNodes[4].innerHTML);
            let summary = text.childNodes[0].childNodes[0].childNodes[28].childNodes[4].innerHTML
            console.log(summary);
             let aboutText = new About(summary)
             return aboutText
            
            
            // return new Artist(text.childNodes[0].childNodes[0].childNodes[28].childNodes[4].innerHTML).getShort()
           
        })
        
  
      
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

