import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logoTitle.png'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(0deg, rgba(32,111,184,1) 30%, rgba(131, 127, 181, 1) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ContainerImageLogo = styled.div`
  margin-top: 68px;
`

const ImageLogo = styled.img`

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
      <ContainerImageLogo>
        <ImageLogo src={logo} />
      </ContainerImageLogo>
      <ContainerCards>
        {
          data && data.map((element) =>(
            <Card key={element.id}>
              <Link to='/internal'>
                <ImagePost src={element._embedded['wp:featuredmedia'][0].source_url} alt=""/>
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
