import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GETALLPOSTS_GET } from '../../api'
import Loading from '../../Helper/Loading'
import useFetch from '../../Hooks/useFetch'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto 0 auto;
`
const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;

  @media(max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media(max-width: 470px){
    grid-template-columns:  1fr;
  }

  `
const Card = styled.div`
  width: 220px;
  height: 220px;
  background: #e0e0eb;
  display: grid;
  transition: all .3s;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transform: scale(1.2)
  }
`
const ImagePost = styled.img`
  border-radius: 5px;
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
  const { data, loading, error, request } = useFetch()
  
  React.useEffect(()=> {
    async function fetchPosts () {
      const { url } = GETALLPOSTS_GET()
      const { response, json } = await request(url)      
    }
    fetchPosts()
  },[request])
  if(loading) return <Loading />
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
