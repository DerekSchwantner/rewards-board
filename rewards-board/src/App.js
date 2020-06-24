import React, { useState } from "react";
import "./App.css";
import RewardBoard from "./components/RewardBoard";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
  };

  return (
    <div className="App">
      <h1>Rewards Dashboard</h1>
      <DragDropContext onDragEnd={(result) => onDragEnd}>
        <RewardBoard />
      </DragDropContext>
    </div>
  );
}

export default App;
