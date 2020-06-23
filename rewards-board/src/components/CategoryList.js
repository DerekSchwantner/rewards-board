import React from "react";
import RewardCard from "./RewardCard";
import styled, { css } from "styled-components";

export default function CategoryList({ title, cards }) {
  return (
    <Container>
      <CategoryTitle>{title}</CategoryTitle>

      {cards.map((card) => {
        return <RewardCard text={card.text} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  background-color: #ccc;
  border-radius: 3;
  width: 300px;
`;
const CategoryTitle = styled.h4``;
