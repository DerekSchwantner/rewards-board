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
            <H3>{text}</H3>
          </CardContainer>
        </div>
      )}
    </Draggable>
  );
}

const CardContainer = styled.div`
  background-color: white;
  height: 7rem;
  width: 7rem;
`;
const H3 = styled.h3`
  color: red;
`;
