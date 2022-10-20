import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { __addComment } from "../redux/modules/commentsSlice";

const Form = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const [comment, setComment] = useState({
        username: "",
        content: "",
    });

    const onAddCommentButtonHandler = (event) => {
        event.preventDefault();
        if (comment.content.trim() === "" || 
            comment.username.trim() === "") 
            {
            return alert("모든 항목을 입력해주세요.");
        }
        dispatch(__addComment({ todoId: id, ...comment }));
        setComment({
          username: "",
          content: "",
        });
    };

    const onChangeInputHandler = (event) => {
        const { name, value } = event.target;
        setComment({
        ...comment,
        [name]:value
        });
    };
    
    return (
        
        <StForm onSubmit={onAddCommentButtonHandler}>                 
               <StNameInput
               type="text"
               onChange={onChangeInputHandler}
               name="username"
               value={comment.username}
               placeholder="이름 (5자 이내)"
               maxLength="5"
               required
               />
               <StBodyTextarea
               type="text"
               onChange={onChangeInputHandler}
               name="content"
               value={comment.content}
               placeholder="댓글 (100자 이내)"
               maxLength="100"
               />            
        <Stbutton onClick={onAddCommentButtonHandler}>
          등록
        </Stbutton>
        </StForm>
    );
};

export default Form;

const StForm = styled.form`
  gap: 12px;
  width: 100%;
  padding: 0 12px;
`;

const StNameInput = styled.input`
  height: 60px;
  width: 90%;
`

const StBodyTextarea = styled.textarea`
  height: 200px;
  width: 90%;
`
const Stbutton = styled.button`
  width: 30%;
  height: 60px;
  padding: 0 20px;
  margin-top: 20px;
  border: 2px solid #eee;
  /* border-radius: 20px; */
  cursor: pointer;
`
