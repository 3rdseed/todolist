import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate();

    return (
        <div>
        <StFormFont>무엇을 할까요?</StFormFont>
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

const StFormFont = styled.div`
font-size: 24px;
`;

const StContainer = styled.div`
    width: 100;
    height: 120px;
    padding: 0 20px;
    margin-top: 20px;
    border: 2px solid #eee;
    border-radius: 40px;
    cursor: pointer;
`


