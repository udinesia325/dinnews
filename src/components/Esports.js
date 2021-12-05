import React from "react"
import NewsCard from "./NewsCard"
import Loading from "./Loading"
import ErrorImg from "./ErrorImg"
import useFetchNews from "../hooks/useFetchNews"

function Esports(){
  const url = "https://newsapi.org/v2/everything?q=esports&language=id&apiKey=8b78dbc2968544948b3a91b8884a8733"
  const [news,loading,error] = useFetchNews(url)
let key = 1
  return (
    <div className="container mt-5 pt-5">
    <div className="row mt-4 justify-content-evenly">
    {loading && <Loading />}
    {error && <ErrorImg/>}
    {  news?.articles?.map((n) => {
     return  <NewsCard {...n} key={key++} />
    })  }
    </div>
    </div>
    )
}

export default React.memo(Esports)