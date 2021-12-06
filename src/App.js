import {lazy,Suspense,useState,useEffect} from "react"
import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Loading from "./components/Loading"
//import InputSearch from "./components/InputSearch"

const Beranda = lazy(() => import("./components/Beranda"))
const Olahraga = lazy(()=>import("./components/Olahraga"))
const Esports = lazy(() => import("./components/Esports"))
const InputSearch = lazy(() => import("./components/InputSearch"))
const NotFound = lazy(() => import("./components/NotFound"))


function App() {
  //cek apakah input kosong
  const [isEmpty,setIsEmpty] = useState(true)
  const [input,setInput] = useState("")
  useEffect(()=>{
    
    setIsEmpty(input.length === 0)
    
  },[input])
  return (
    <div>
      <Router>
      {/*kirimkan ke input di navbar*/}
      <Navbar setInput={setInput} input={input} />
        <Suspense fallback={<Loading />}>
          <Routes>
             {/*hanya tampilkan ketika input ada isinya*/}
             <Route  path="/" element={(isEmpty) ? <Beranda  /> : <InputSearch keyword={input} /> } />
             <Route path="/olahraga" element={(isEmpty) ? <Olahraga  /> : <InputSearch keyword={input} /> } />
             <Route path="/esports" element={(isEmpty) ? <Esports  /> : <InputSearch keyword={input} /> } />
             <Route path="*" element={<NotFound />} />
          </Routes>
         </Suspense>
         <Footer />
      </Router>
    </div>
    )
}

export default App;
