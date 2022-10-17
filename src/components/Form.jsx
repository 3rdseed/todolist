import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate();

    return (
        <div>
        <FormFont>무엇을 할까요?</FormFont>
        <StContainer
        onClick={()=>{
            navigate("/addlist")
        }}>
            <h2>할일 기록하기</h2>
        </StContainer>


        <StContainer
        onClick={()=>{
            navigate("/list")
        }}>
            <h2>TODO LIST</h2>
        </StContainer>
        </div>
    )
}
export default Form;

const FormFont = styled.div`
font-size: 24px;
`;

const StContainer = styled.div`
    width: 100;
    height: 120px;
    padding: 0 20px;
    margin-top: 50px;
    border: 2px solid #eee;
    border-radius: 20px;
    cursor: pointer;
`


