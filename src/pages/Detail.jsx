import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components';
import Layout from '../components/Layout'
import { deleteList } from '../redux/modules/todosSlice';
import Comments from "../components/Comments";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const todos = useSelector((state) => state.todos.todo)

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
      <StButton
        borderColor="red"
        onClick={() => deleteList(todos.id)}
      >
        삭제하기
      </StButton>
      <Comments />
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

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
