import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components'

export const List = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  // useEffect(() => {
  //   dispatch(__getTodosThunk());
  // }, [dispatch]);

  return (
    <div>List</div>
    // <StContainer>
    //   {todos.map((todo) => (
    //     <Card key={todo.id} todo={todo} />
    //   ))}
    // </StContainer>
  )
}

export default List;

const StContainer = styled.div`
  height: calc(100% - 45px - 48px);
`;