import styled from "styled-components"

const LoadingStyle = styled.div`
  display:flex;
  justify-content:center;
  gap:.5em;
  div{
    width:1em;
    height:1em;
    border-radius:50%;
  }
  div:nth-child(1){
    background-color:var(--primary-color);
  }
  div:nth-child(2){
    background-color:var(--secondary-color);
  }
  
`

export default function Loading(){
  return (
      <LoadingStyle className="container loading">
        <div></div>
        <div></div>
      </LoadingStyle>
    )
}