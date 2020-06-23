import React from "react";

const initialState = [
  {
    title: "C1",
    id: 0,
    cards: [
      {
        id: 0,
        text: "Reward 1",
      },
      {
        id: 1,
        text: "Reward 2",
      },
    ],
  },
];

export default function BoardReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
