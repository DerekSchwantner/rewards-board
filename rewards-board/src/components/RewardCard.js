import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

export default function RewardCard({ text, id, index }) {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CardContainer id={id}>
            <div>
              <button>X</button>
            </div>
            <H3>{text}</H3>
          </CardContainer>
        </div>
      )}
    </Draggable>
  );
}

const CardContainer = styled.div`
  background-color: lightgrey;
  height: 7rem;
  width: 7rem;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    margin-right: 0.5rem;
    button {
      padding: 0;
    }
  }
`;
const H3 = styled.h3`
  color: Black;
`;
