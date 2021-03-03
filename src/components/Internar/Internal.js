import React from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import { GETPOST_GET } from '../../api'
import Loading from '../../Helper/Loading'
import useFetch from '../../Hooks/useFetch'

const Wrapper = styled.div`
  height: 100vh;
  margin: 0 auto 0 auto;
  width: 80%;
`
const Internal = () => {
  const { slug } = useParams()
  const { data, loading, request } = useFetch()
  
  React.useEffect(()=>{
    
    async function fetchPost(){
      const { url } = GETPOST_GET(slug)
      const { response } = await request(url)
      return response
    }
    fetchPost()
  },[slug,request])

  
  const stringToHmtl = (str) => {
    return {__html: str}
  }

  if(loading) return <Loading />
  return (
    <Wrapper className="internal" >
      
      {
        data && <>
          <img src={data[0]._embedded['wp:featuredmedia'][0].source_url} alt={data[0].title.rendered}/> 
          <h2>{data[0].title.rendered}</h2>
          <div dangerouslySetInnerHTML={stringToHmtl(data[0].content.rendered)} />
          <p>Autor: </p>
          </>
      }
      
    </Wrapper>
  )
}

export default Internal
