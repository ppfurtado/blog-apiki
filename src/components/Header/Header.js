import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../../assets/logoTitle.png";

const ContainerHeader = styled.header`
  display: flex;
  width: 90%;
  margin: 0 auto;
`;

const ContainerImageLogo = styled.div`
  padding-top: 10px;
  justify-content: center;
  background: white;
  width: 200px;
`;
const ImageLogo = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

const Header = () => {
  return (
    <ContainerHeader>
      <ContainerImageLogo>
        <Link to="/">
          <ImageLogo src={logo} alt="blog Apiki" />
        </Link>
      </ContainerImageLogo>
      <nav></nav>
    </ContainerHeader>
  );
};

export default Header;
