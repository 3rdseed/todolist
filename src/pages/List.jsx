import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import Layout from '../components/Layout'


const List = () => {

  const todos = useSelector((state) => state.todos.todo)
  console.log(todos)

  return (
    <Layout>
      {todos.map((todo) => {
        return (
        <StTodoBox key={todo.id}>
        <div>{todo.user}</div><br/>
        <div>{todo.title}</div><br/>
        <div>{todo.body}</div><br/>
        </StTodoBox>
        )})
      }
    {/* < Link to = "/detail">할일 수정하기 페이지로 이동</Link> */}
    </Layout>
  )
}

export default List;

const StTodoBox = styled.div`
  display: flex;
  justify-content: center;

  width: 100;
  height: 120px;
  padding: 0 20px;
  margin-top: 50px;
  border: 2px solid #eee;
  /* border-radius: 20px; */
  cursor: pointer;
`
