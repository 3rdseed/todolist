import React, { useState } from 'react'
import Layout from '../components/Layout';
import styled from 'styled-components';
// import { useDispatch } from 'react-redux';
// import { addlist } from '../redux/modules/todosSlice';
import { useNavigate } from 'react-router-dom';

const AddList = () => {

  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [todo, setTodo] = useState({
    user: "",
    title: "",
    body: "",
  });

  const onChangeHandler = (e) => {
    const { name, value} = e.target;
    setTodo({
      ...todo,
      [name]:value,
    });
    // console.log(e.target.value)
  }

  return (
    <Layout>
      <div>
        
        <StMain>
          <FormFont>작성자</FormFont>
          <StNameInput
          type="text"
          onChange={onChangeHandler}
          name="user"
          value={todo.user}
          placeholder="작성자의 이름을 입력해 주세요. (5자 이내)"
          maxlength="5"
          required
          />

          <FormFont>제목</FormFont>
          <StNameInput
          type="text"
          onChange={onChangeHandler}
          name="title"
          value={todo.title}
          placeholder="제목을 입력해 주세요. (50자 이내)"
          maxlength="50"
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
        <Stbutton onClick={()=>{
            navigate("/list")
        }}>
          추가하기
        </Stbutton>
      </div>
    </Layout>
  )
}

export default AddList;

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