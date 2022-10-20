import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components';
import Layout from '../components/Layout'

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id)
  const todos = useSelector((state)=> state.todos.todo);
  console.log(todos)

  return (
    <Layout>
      <StDetailHeader>
        <div onClick={() => {navigate("/list")}}>
          뒤로가기
        </div>
      </StDetailHeader>
      {todos.map((todo)=>{
        return (
        <div key={todo.id}>
          <div>{todo.title}</div>
          <div>{todo.body}</div>
        </div>
        )
        })}
        <button>수정</button>
        <button>저장</button>
    </Layout>
  )
}

export default Detail

const StDetailHeader = styled.div`
  font-size: 24px;
  display: flex;
  justify-content: right;
`

const StTodoBox = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100;
  height: 120px;
  padding: 0 20px;
  margin-top: 20px;
  border: 2px solid #eee;
  border-radius: 40px;
  cursor: pointer;
`