import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { deleteList, __deleteTodoThunk } from '../redux/modules/todosSlice';


const List = ({todo}) => { // 여기에 todo 넣으니까 삭제 onClick이 실행되네
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todo); //조회
  console.log(todos)

// dispatch(____deleteTodoThunk로 쓰고 싶은데 흠..!)
const onDeleteHandler = (id) => {
  dispatch(deleteList(id));
}
console.log(todos)
  return(
    <Layout>
    <StFormFont fontSize="30px">내 할일</StFormFont>
    {todos.map((todo) => {
      return (
        // detail 페이지로 이동
        // <StTodoBox onClick={() => {navigate("/detail")}}> 
        // detail 페이지 id값 찾아서 이동
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