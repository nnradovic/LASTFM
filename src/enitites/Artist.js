class Artist{
   constructor(artist){
       this.name = artist.name
       this.image = artist.image[3]['#text']
       this.rank = artist['@attr'].rank
   }

}
    
export default Artist