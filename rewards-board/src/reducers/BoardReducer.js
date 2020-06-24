import React from "react";
export const ADD_NUM = "ADD_NUM";

const initialState = [
  {
    title: "Rewards",
    number: 0,
    id: 60,
    cards: [
      {
        id: 6,
        text: "Reward 1",
      },
      {
        id: 7,
        text: "Reward 2",
      },
      {
        id: 8,
        text: "Reward 3",
      },
      {
        id: 9,
        text: "Reward 4",
      },
    ],
  },
  {
    title: "C1",
    id: 1,
    cards: [
      {
        id: 10,
        text: "Reward 1",
      },
      {
        id: 11,
        text: "Reward 2",
      },
    ],
  },
  {
    title: "C2",
    id: 2,
    cards: [
      {
        id: 12,
        text: "Reward 1",
      },
      {
        id: 13,
        text: "Reward 2",
      },
    ],
  },
  {
    title: "C3",
    id: 3,
    cards: [
      {
        id: 14,
        text: "Reward 1",
      },
      {
        id: 15,
        text: "Reward 2",
      },
      {
        id: 99,
        text: "Reward 4",
      },
    ],
  },
  {
    title: "C4",
    id: 4,
    cards: [
      {
        id: 16,
        text: "Reward 1",
      },
      {
        id: 17,
        text: "Reward 2",
      },
    ],
  },
  {
    title: "C5",
    id: 5,
    cards: [
      {
        id: 18,
        text: "Reward 1",
      },
      {
        id: 19,
        text: "Reward 2",
      },
    ],
  },
];

export default function BoardReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_NUM":
      const newNum = state[0].number;
      const newState = [...state, newNum + 1];
      return newState;
    default:
      return state;
  }
}
