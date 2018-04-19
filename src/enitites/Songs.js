class Songs{
    constructor(songs){
      this.name = songs.name
      this.image = songs.url
      this.rank = songs['@attr'].rank
    }
  }
  
  export default Songs