import Error404 from "../assets/Error404.svg"

export default function NotFound(){
  return (
    <div className="container" >
      <div className="row" >  
        <div className="col col-10 col-md-8 col-lg-7 mt-5 pt-5 mx-auto ">
          <img src={Error404} alt="Error" style={{maxWidth:"200px"}} className="ms-5" />
          <p className="text-center mt-3 fw-bold"> Berita Tidak Ditemukan ...</p>
        </div>
      </div>
    </div>
    )
}