import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import { deleteList, getList } from '../redux/modules/todosSlice';

const List = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todo)

  const onDeleteHandler = (id) => {
    dispatch(deleteList(id));
  }

  return (
    <Layout>
      <StFormFont fontSize="30px">내 할일</StFormFont>
      {todos.map((todo) => {
        return (
        <StTodoBox onClick={() => {navigate(`/detail/${todo.id}`)}}>
        <div key={todo.id}>
        <StFormFont fontSize="28px">{todo.title}</StFormFont>
        <div>작성자 : {todo.user}</div>
        </div>
        <RiDeleteBin6Line onClick={(e) => {e.stopPropagation();
            if(window.confirm("목록에서 삭제하시겠습니까?")) {
              return onDeleteHandler(todo.id)
            } else {
              return
            }
            }}/>
        </StTodoBox>
        )})
      }
    {/* < Link to = "/detail"></Link> */}
    </Layout>
  )
}

export default List;

const StFormFont = styled.div`
font-size: ${(props) => props.fontSize};
`;

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
  width: 10px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;

