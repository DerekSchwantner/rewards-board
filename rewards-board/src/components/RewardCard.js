import React from "react";
import styled, { css } from "styled-components";

export default function RewardCard({ text }) {
  return <H3>{text}</H3>;
}

const H3 = styled.h3`
  color: red;
`;
