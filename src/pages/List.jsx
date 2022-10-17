import React from 'react';
import styled from "styled-components";
import TodoList from "../components/TodoList";
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const List = () => {
  return (
    <Layout>
      < Link to = "/detail">할일 수정하기 페이지로 이동</Link>
      <div>내 할일</div>
      <StContainer>
        <TodoList />
      </StContainer>
    </Layout>
    
  )
}

export default List;

const StContainer = styled.div`
  height: calc(100% - 45px - 48px);
`;
