import React from 'react'
import styled from 'styled-components'

import logo from '../../assets/logoTitle.png'


const ContainerImageLogo = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  background: white;
`
const ImageLogo = styled.img`
`

const Header = () => {
  return (
    <ContainerImageLogo>
      <ImageLogo src={logo} />
    </ContainerImageLogo>
  )
}

export default Header
