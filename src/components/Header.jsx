import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import { HiHome } from "react-icon/hi";


const Header = () => {
  const navigate = useNavigate();
  return (
  <StContainer>
    {/* <HiHome
      size="24"
      onClick={() => {
        navigate("/");
      }}
    /> */}
    <StTile>모두의 투두 리스트</StTile>
  </StContainer>
  )
}

export default Header;

const StContainer = styled.header`
  background-color: gray;
`


const StTile = styled.div`
  font-size: 24px;
  `;
