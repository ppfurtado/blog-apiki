import React from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  margin: 0 auto 0 auto;
  width: 80%;
`
const Internal = (props) => {
  const [data, setData] = React.useState(null)

  const { slug } = useParams()

  React.useEffect(()=> {
    async function getData() {
      const response = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`)
      const json = await response.json()
      setData(json)
      return json
    }
    getData()
  },[slug])
  
  const stringToHmtl = (str) => {
    return {__html: str}
  }

  console.log('DATA', data)

  return (
    <Wrapper className="internal" >
      {
        data && <div dangerouslySetInnerHTML={stringToHmtl(data[0].content.rendered)} />
   
      }
      
    </Wrapper>
  )
}

export default Internal
