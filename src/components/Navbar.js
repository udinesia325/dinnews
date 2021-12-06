import {useState,useEffect} from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"
import dinnews from "../assets/dinnews.png"

const NavStyle = styled.nav`
   background-color:var(--primary-color);
   .nav-item{
    color:white
   }
   img{
    max-width:100px;
    max-height:50px;
   }
   .navbar-toggler-times{
   display:none;
   }
   .navbar-toggler{
    display:none;
    transform:scale(2);
   }
   input {
     border:none;
     background:rgba(255,255,255,.3);
     border-radius:6px;
     padding:5px;
     outline:none;
     color:white;
   }
   input::placeholder {
   color:white;
   }
   a{
    color:white;
    text-decoration:none;
    font-weight:bold;
   }
   ul{
    list-style:none;
    padding:0;
    margin:0;
    display:flex;
    li{
      transition:all .5s ease;
    }
    li:hover{
      text-decoration: underline;
      padding-bottom:-.2em;
    }
   }
   @media only screen and (min-width:768px){
     li{
      margin-left:15px;
     }
   }
   @media only screen and (max-width:768px){
     li{
      margin-top:.5em;
     }
     .navbar-toggler-times{
      display:block;
     }
     .navbar-toggler{
      display:block;
      position:absolute;
      right:.5em;
      color:white;
     }
     .nav-item{
      padding:.5em 1em;
      background-color:var(--secondary-color);
      position: absolute;
      z-index:999;
      right:0.5em;
      top:-9em;
      border-radius:13px;
      flex-direction:column;
      transition:all .3s ease-in-out;
      span{
      text-align:right;
      transform:scale(2);
      margin-right:1em;
      }
   }
   .show{
   top:0.5em;
   }
`;

function Navbar({input,setInput}) {
  const [navShow,setNavShow] = useState(false)
  useEffect(()=>{
    setInput(input)
  },[input,setInput])
  const handleInput = (e) => {
    setInput(e.target.value)
  }
  const emptyInput = () => {
    setInput("")
  }
  return (
    <NavStyle className="navbar fixed-top pb-0">
    <div className="container">
      <div className="navbar-brand"><img src={dinnews} alt={dinnews} /></div>
      <span className="navbar-toggler" onClick={()=> setNavShow(!navShow)}>&equiv;</span>
      <input placeholder="Search ...." value={input} onChange={handleInput}  />
      <ul className={navShow ? "nav-item show" : "nav-item"} onClick={()=> setNavShow(!navShow)}>
        <span className="navbar-toggler-times" onClick={()=> setNavShow(!navShow)}>&times;</span>
        <li onClick={emptyInput}><Link to="">Beranda</Link></li>
        <li onClick={emptyInput}><Link to="esports">E - Sports</Link></li>
        <li onClick={emptyInput}><Link to="olahraga">Olahraga</Link></li>
      </ul>
      </div>
    </NavStyle>
    )
  
}
export default Navbar