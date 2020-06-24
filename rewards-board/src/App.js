import React from "react";
import "./App.css";
import RewardBoard from "./components/RewardBoard";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { ADD_NUM } from "./reducers/BoardReducer";
import styled from "styled-components";

function App() {
  const num = useSelector((state) => state.lists[0].number);
  const dispatch = useDispatch();
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    // const {source, destination} = result
    // const column
  };
  return (
    <div className="App">
      <h1>Rewards Dashboard</h1>
      <Button onClick={() => dispatch({ type: ADD_NUM })}>{num}</Button>
      <DragDropContext onDragEnd={onDragEnd}>
        <RewardBoard />
      </DragDropContext>
    </div>
  );
}

export default App;

const Button = styled.button`
  width: 4rem;
  height: 2rem;
`;
