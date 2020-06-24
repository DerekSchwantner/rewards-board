import React from "react";
import CategoryList from "./CategoryList";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function RewardBoard(props) {
  const lists = useSelector((state) => state.lists);

  return (
    <BoardContainer>
      {lists.map((list) => {
        return (
          <CategoryList
            title={list.title}
            cards={list.cards}
            key={list.id}
            id={list.id}
          />
        );
      })}
    </BoardContainer>
  );
}

const BoardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
