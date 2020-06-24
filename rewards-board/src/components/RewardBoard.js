import React from "react";
import CategoryList from "./CategoryList";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

export default function RewardBoard(props) {
  // Accessing
  const lists = useSelector((state) => state.lists);
  console.log(lists);
  return (
    <BoardContainer>
      {lists.map((list) => {
        return (
          <CategoryList
            title={list.title}
            cards={list.cards}
            key={list.id}
            id={list.id}
            className="board"
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

// const mapStateToProps = (state) => ({
//   lists: state.lists,
// });

// export default connect(mapStateToProps)(RewardBoard);
