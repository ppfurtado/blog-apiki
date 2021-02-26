import React from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import { GETPOST_GET } from '../../api'

const Wrapper = styled.div`
  height: 100vh;
  margin: 0 auto 0 auto;
  width: 80%;
`
const Internal = () => {
  const [data, setData] = React.useState(null)

  const { slug } = useParams()
  const { url } = GETPOST_GET(slug)

  React.useEffect(()=> {
    async function getData() {
      const response = await fetch(url)
      const json = await response.json()
      setData(json)
      return json
    }
    getData()
  },[url])
  
  const stringToHmtl = (str) => {
    return {__html: str}
  }

  console.log('DATA', data)

  return (
    <Wrapper className="internal" >
      
      {
        data && <>
          <img src={data[0]._embedded['wp:featuredmedia'][0].source_url} alt=""/> 
          <h2>{data[0].title.rendered}</h2>
          <div dangerouslySetInnerHTML={stringToHmtl(data[0].content.rendered)} />
          </>
  
   
      }
      
    </Wrapper>
  )
}

export default Internal
