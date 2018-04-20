import styled from 'styled-components'

export const AlbumBox = styled.div `
width:320px;
height:320px;
background:red;
color:black;
transition:all 0.6s ease;
transform-style: preserve-3d;
&:hover{
   transform:rotateY(180deg);
   
   
}

.back{
   transform: rotateY(180deg);
   

}
.front p{
 position:absolute;
 top:0px;
 left:10px;
 backface-visibility:hidden;
 color:red;
 font-weight:900;

}
.front, .back{
    position:absolute;
    width:320px;
    height:320px;
    backface-visibility:hidden;
}

img{
 width:320px;
 height:320px;
}

p{
    text-align:center;
   
}

.back:hover{
    overflow:scroll;
   
}

.back li{
    list-style-type: none;
}


a button{
    background-color:black !important;
    display:block;
       margin:0 auto;
       padding:50px;

}
`