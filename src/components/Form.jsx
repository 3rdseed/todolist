import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addlist } from '../redux/modules/todosSlice';
import styled from 'styled-components'

const Form = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const user = (e) => {
        const userInput= e.target.value;
        setTitle(userInput)
    }

    const todoAdd = () => {
        dispatch(addlist(user));
        //setTitle
    }

    return (
        <div>
        <FormFont>무엇을 할까요?</FormFont>
        <button >할일 기록하기</button>
        <div>TODO LIST</div>
        </div>
    )
}
export default Form;

const FormFont = styled.div`
font-size: 24px;
`;


