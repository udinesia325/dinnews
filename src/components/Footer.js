import styled from "styled-components"

const FooterStyle = styled.div`
  background-color:var(--primary-color);
  position: relative;
  width:100%;
  height:5em;
  bottom:-5em;
  left:0;
  rigth:0;
  text-align:center;
  color:white;
  padding-top:.5em;
`
  
export default function Footer(){
  return (
        <FooterStyle >
          <p>Copyright&copy; Udinesia325  {new Date().getFullYear()}</p>
        </FooterStyle>
      )
}