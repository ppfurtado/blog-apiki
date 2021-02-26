import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`
const Card = styled.div`
  width: 220px;
  height: 220px;
  background: white;
  display: grid;
  transition: all .3s;

  &:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transform: scale(1.2)
  }
`
const ImagePost = styled.img`

`
const TitlePost = styled.p`
  margin-left: 10px;
`
const LinkPost = styled.a`
  text-decoration: none;
  color: blue;
  justify-self: center;

  &:hover {
    font-size: 18px
  }
`


const Home = () => {
  const [data, setData] = React.useState(null)


  React.useEffect(()=> {
    async function getData(){
      const response = await fetch('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
      const json = await response.json()
      setData(json)
      return json
    }
    getData()

  },[])


  return (
    <Wrapper>
      <ContainerCards>
        {
          data && data.map((element, index) =>(
            <Card key={element.id}>
              <Link to={`internal/${index}/${element.slug}`}>
                <ImagePost src={element._embedded['wp:featuredmedia'][0].source_url} alt="image post"/>
                <TitlePost> { element.title.rendered } </TitlePost>

              </Link>
              <LinkPost href={element.link} target="_blank">
                Post Original...
              </LinkPost>
            </Card>
          ) )
        }
      </ContainerCards>
    </Wrapper>
  )
}

export default Home
