import React from "react"
import styled from "styled-components"
const CardStyle = styled.div`
  max-height:240px;
 img{
   width:100%;
   height:100%
   position: absolute;
   z-index:0;
  }
  p{
  position:absolute;
  width:100%;
  padding:1.3em .2em 0 .2em;
  min-height:50px;
  font-size:.6em;
  color: white;
  z-index:3;
  bottom:-1em;
  text-align:center;
  text-shadow:0px 0px 8px black;
  a{
    font-weight:bold;
    color:inherit;
    text-decoration:none;
  }&:hover{
    text-decoration:underline;
  }
  }
  @media only screen and (min-width:768px){
   min-height:200px;
    p{
      font-size:1em
    }
  }
`

function NewsCard({title,urlToImage,url}) {
  
  return (
    <CardStyle className="card col col-10   col-xs-10 col-sm-10 col-md-10 col-lg-8  p-0 mt-3 mx-auto">
      <img src={urlToImage} alt={urlToImage} />
      <p>
      <a href={url} target="_blank" rel="noreferrer noopener">
      {title}
      </a>
      </p>
     
    </CardStyle>
    )
}
export default React.memo(NewsCard)