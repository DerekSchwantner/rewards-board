import React from "react";

const initialState = [
  {
    title: "Rewards",
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
      {
        id: 2,
        text: "Reward 3",
      },
      {
        id: 3,
        text: "Reward 4",
      },
    ],
  },
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
  {
    title: "C2",
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
  {
    title: "C3",
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
  {
    title: "C4",
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
  {
    title: "C5",
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
