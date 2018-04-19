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
       overflow:auto;
   }
   

`