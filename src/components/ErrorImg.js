import Search from "../assets/Search.svg"

export default function ErrorImg(){
  return (
    <div className="col col-10 col-md-8 col-lg-7 mx-auto">
      <img src={Search} alt="Error" style={{maxWidth:"200px"}} />
      <p className=" fw-bold"> Berita Tidak Ditemukan ...</p>
    </div>
    )
}