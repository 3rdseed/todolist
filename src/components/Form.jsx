import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";


const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <StCard
        onClick={() => {
            navigate(`/detail/${todo.id}`);
        }}
        >
        </StCard>
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


