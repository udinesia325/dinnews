import {useEffect,useReducer} from "react"
import axios from "axios"

const initialState = {
  news:[],
  loading:true,
  error:false,
}

const reducer = (state,{type,payload}) => {
  switch (type) {
    case 'news':
      return {
        ...state,
        news : payload,
        loading:false,
        error:false
      }
    
    case 'error':
      return {
        ...state,
        error:true,
        loading:false
      }
    default:  
      return state
  }
}


export default function useFetchNews(url){
  const [{news,loading,error}, dispatch] = useReducer(reducer,initialState)
  
  useEffect(() => {
  let isCanceled = false
  axios.get(url)
    .then((response) => {
      if(!isCanceled){
       
      dispatch({type:"news",payload:response.data})
        
      }
      })
    .catch(() => dispatch({type:"error"}))
    return () => {
      isCanceled = true
    }
  })
    return [news, loading, error]
}