class About{
    constructor(text){
        this.about = text
    }

    getShort=()=>{
       if(this.about>300){
           let new300 = this.about(0,300);
           let dot = new300.lastIndexOf('.');
           let newText = new300.slice(0,dot+1);
           return newText
       }
    }
}

export default About