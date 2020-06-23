import React from "react";
import RewardCard from "./RewardCard";
import styled, { css } from "styled-components";

export default function CategoryList({ title }) {
  return (
    <Container>
      <CategoryTitle>{title}</CategoryTitle>
      <h3>List</h3>
      <RewardCard />
    </Container>
  );
}

const Container = styled.div`
  background-color: #ccc;
  border-radius: 3;
  width: 300px;
`;
const CategoryTitle = styled.h4``;
