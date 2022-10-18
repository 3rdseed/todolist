import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import Layout from '../components/Layout'

const Detail = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <StDetailHeader
      onClick={() => {
        navigate("/list")
      }}>
        뒤로가기
      </StDetailHeader>

      <button>수정하기</button>
      <button>저장하기</button>
    </Layout>
  )
}

export default Detail

const StDetailHeader = styled.div`
  font-size: 24px;
  cursor: pointer;
`