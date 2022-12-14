import React, { useState } from 'react'
import Layout from '../components/Layout';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addList } from '../redux/modules/todosSlice';

const AddList = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [todo, setTodo] = useState({
    id: "",
    user: "",
    title: "",
    body: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]:value
    });
  }

  return (
    <Layout>
      <form onSubmit={(e)=>{e.preventDefault();
          if (
            todo.body.trim() === "" ||
            todo.user.trim() === "" ||
            todo.title.trim() === ""
          ) {
            return alert("모든 항목을 입력해주세요.");
          }
          navigate("/list");
          dispatch(addList(todo))}}>
        <StMain>
          <FormFont>작성자</FormFont>
          <StNameInput
          type="text"
          onChange={onChangeHandler}
          name="user"
          value={todo.user}
          placeholder="작성자의 이름을 입력해 주세요. (5자 이내)"
          maxLength="5"
          required
          />

          <FormFont>제목</FormFont>
          <StNameInput
          type="text"
          onChange={onChangeHandler}
          name="title"
          value={todo.title}
          placeholder="제목을 입력해 주세요. (50자 이내)"
          maxLength="50"
          />

          <FormFont>내용</FormFont>
          <StBodyTextarea
          type="text"
          onChange={onChangeHandler}
          name="body"
          value={todo.body}
          placeholder="내용을 입력해 주세요. (200자 이내)"
          maxLength="200"
          />
        </StMain>
        <Stbutton>
          추가하기
        </Stbutton>
        </form>
    </Layout>
  )
}

export default AddList;

const FormFont = styled.div`
font-size: 24px;
`;

const StNameInput = styled.input`
  height: 30px;
  width: 90%;
`

const StBodyTextarea = styled.textarea`
  height: 200px;
  width: 90%;
`

const StMain = styled.div`
  width: 95%;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`

const Stbutton = styled.button`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  margin-top: 40px;
  border: 2px solid #eee;
  border-radius: 20px;
  cursor: pointer;
`
