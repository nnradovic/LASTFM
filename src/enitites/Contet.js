class Content{
    constructor(content){
      this.name = content.data.childNodes[0].childNodes[0].childNodes[0].innerHTML
      this.summary = content.data.childNodes[0].childNodes[0].childNodes[28].childNodes[4].innerHTML
     
    }
  }
  
  export default Content