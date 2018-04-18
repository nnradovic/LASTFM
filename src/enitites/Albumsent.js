class Albums{
  constructor(albums){
    this.name = albums.name
    this.image = albums.image[3]['#text']
    this.artist = albums.artist.name
  }
}

export default Albums