class Songs{
    constructor(songs){
      this.name = songs.album.tracks.track.name
      this.image = songs.album.tracks.track.url
      this.rank = songs.album.tracks.track['@attr'].rank
    }
  }
  
  export default Songs