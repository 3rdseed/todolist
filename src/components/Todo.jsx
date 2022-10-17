import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addlist } from "../redux/modules/todosSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [todo, setTodo] = useState({
    title: "",
    body: "",
    username: "",
  });

  // useEffect(() => {
  //   if (!isSuccess) return;
  //   if (isSuccess) navigate("/works");

  //   return () => dispatch(clearTodo());
  // }, [dispatch, isSuccess, navigate]);


  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  return (
    <StContainer>
    <StForm
        onSubmit={(e) => {
          e.preventDefault();
          if (
            todo.body.trim() === "" ||
            todo.user.trim() === "" ||
            todo.title.trim() === ""
          ) {
            return alert("모든 항목을 입력해주세요.");
          }
          dispatch(addlist(todo));
          setTodo({ title: "", body: "", username: "" });
          navigate("/detail");
        }}
      >
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
        </StForm>
        </StContainer>
  )
}

export default Todo;

const StForm = styled.form`
  width: 100%;
  height: 100%;
`;

const StContainer = styled.div`
  height: 100%;
`;

const FormFont = styled.div`
font-size: 24px;
`;

const StNameInput = styled.input`
  height: 60px;
  width: 100%;
`

const StBodyTextarea = styled.textarea`
  height: 200px;
  width: 100%;
`

const StMain = styled.div`
  width: 100%;
`

const Stbutton = styled.button`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  margin-top: 420px;
  border: 2px solid #eee;
  /* border-radius: 20px; */
  cursor: pointer;
`