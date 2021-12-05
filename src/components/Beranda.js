import React from "react"
import NewsCard from "./NewsCard"
import Loading from "./Loading"
import Content from "./Content"
import ErrorImg from "./ErrorImg"
import useFetchNews from "../hooks/useFetchNews"

function Beranda() {
  const url = "https://newsapi.org/v2/top-headlines?country=id&apiKey=8b78dbc2968544948b3a91b8884a8733"
     const [news,loading,error] = useFetchNews(url)
     
     let key = 1
  return (
    <Content>
    {loading && <Loading />}
    {error  && <ErrorImg />}
    {  news?.articles?.map((n) => {
     return  <NewsCard {...n} key={key++} />
    })  }
    </Content>
    )
}
export default React.memo(Beranda)