import React from "react";
import RewardCard from "./RewardCard";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

export default function CategoryList({ title, cards, id, className }) {
  return (
    <Container>
      <CategoryTitle>{title}</CategoryTitle>
      <Droppable droppableId={String(id)}>
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
      <Droppable droppableId={String(id)}>
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
      <Droppable droppableId={String(id)}>
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
      <Droppable droppableId={String(id)}>
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
  background-color: #ccc;
  border: 1px solid black;
  border-radius: 3;
  width: 300px;
  padding: 1rem;
  margin-right1rem;
`;
const CategoryTitle = styled.h4``;

const Tile = styled.div`
  background-color: white;
  height: 7rem;
  width: 7rem;
`;

// const drop = (e) => {
//     e.preventDefault();
//     const cardId = e.dataTransfer.getData("cardId");
//     const card = document.getElementById(cardId);

//     card.style.display = "block";

//     e.target.appendChild(card);
//   };

//   const dragOver = (e) => {
//     e.preventDefault();
//   };

{
  /* <Container
      id={id}
      className={className}
      onDrop={drop}
      onDragOver={dragOver}
    >
    </Container> */
}

{
  /* <RewardCard
            text={card.text}
            id={card.id}
            className="card"
            draggable="true"
            key={card.id}
            onDragOver={dragOver}
          /> */
}

//   This works
// export default function CategoryList({ title, cards, id, className }) {
//     return (
//       <Droppable droppableId={String(id)}>
//         {(provided) => (
//           <Container
//             {...provided.droppableProps}
//             ref={provided.innerRef}
//             id={id}
//             className={className}
//           >
//             <CategoryTitle>{title}</CategoryTitle>

//             {cards.map((card, index) => {
//               return (
//                 <RewardCard
//                   text={card.text}
//                   index={index}
//                   id={card.id}
//                   key={card.id}
//                 />
//               );
//             })}
//             {provided.placeholder}
//           </Container>
//         )}
//       </Droppable>
//     );
//   }
