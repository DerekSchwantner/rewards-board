import React from "react";
import RewardCard from "./RewardCard";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

export default function CategoryList({ title, cards, id, className }) {
  return (
    <Container>
      <CategoryTitle>{title}</CategoryTitle>
      {/* Dropzones for each reward level so the rewards will stay in their respective swimlanes*/}
      {/* Dropzone for reward 1 */}
      <Droppable droppableId={`${title}-1`}>
        {(provided) => (
          <Tile
            rewardId={"1"}
            {...provided.droppableProps}
            ref={provided.innerRef}
            id={id}
          >
            {cards.map((card, index) => {
              return card.text == "Reward 1" ? (
                <RewardCard
                  text={card.text}
                  index={index}
                  id={card.id}
                  key={card.id}
                />
              ) : (
                <h1 style={{ display: "none" }}>empty</h1>
              );
            })}

            {provided.placeholder}
          </Tile>
        )}
      </Droppable>
      {/* Dropzone for reward 2 */}
      <Droppable droppableId={`${title}-2`}>
        {(provided) => (
          <Tile
            rewardId={"2"}
            {...provided.droppableProps}
            ref={provided.innerRef}
            id={id}
          >
            {cards.map((card, index) => {
              return card.text == "Reward 2" ? (
                <RewardCard
                  text={card.text}
                  index={index}
                  id={card.id}
                  key={card.id}
                />
              ) : (
                <h1 style={{ display: "none" }}>empty</h1>
              );
            })}
            {provided.placeholder}
          </Tile>
        )}
      </Droppable>
      {/* Dropzone for reward 3 */}
      <Droppable droppableId={`${title}-3`}>
        {(provided) => (
          <Tile
            rewardId={"4"}
            {...provided.droppableProps}
            ref={provided.innerRef}
            id={id}
          >
            {cards.map((card, index) => {
              return card.text == "Reward 3" ? (
                <RewardCard
                  text={card.text}
                  index={index}
                  id={card.id}
                  key={card.id}
                />
              ) : (
                <h1 style={{ display: "none" }}>empty</h1>
              );
            })}
            {provided.placeholder}
          </Tile>
        )}
      </Droppable>
      {/* Dropzone for reward 4 */}
      <Droppable droppableId={`${title}-4`}>
        {(provided) => (
          <Tile
            rewardId={"4"}
            {...provided.droppableProps}
            ref={provided.innerRef}
            id={id}
          >
            {cards.map((card, index) => {
              return card.text == "Reward 4" ? (
                <RewardCard
                  text={card.text}
                  index={index}
                  id={card.id}
                  key={card.id}
                />
              ) : (
                <h1 style={{ display: "none" }}>empty</h1>
              );
            })}
            {provided.placeholder}
          </Tile>
        )}
      </Droppable>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 3;
  width: 300px;
  padding: 1rem;
  margin-right1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;

`;
const CategoryTitle = styled.h4``;

const Tile = styled.div`
  background-color: white;
  height: 7rem;
  width: 7rem;
  border: 2px solid black;
`;
