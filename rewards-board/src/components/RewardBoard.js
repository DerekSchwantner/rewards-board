import React from "react";
import CategoryList from "./CategoryList";
import { useSelector } from "react-redux";

export default function RewardBoard(props) {
  const lists = useSelector((state) => state.lists);
  //   const { lists } = props;
  console.log(lists);
  return (
    <div>
      <h1>Hello</h1>
      {lists.map((list) => {
        return <CategoryList title={list.title} cards={list.cards} />;
      })}
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   lists: state.lists,
// });

// export default connect(mapStateToProps)(RewardBoard);
