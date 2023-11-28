import React from 'react';
import { Container, Item } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => (
  <Container>
    <Item>Good: {good}</Item>
    <Item>Neutral: {neutral}</Item>
    <Item>Bad: {bad}</Item>
    <Item>Total: {total}</Item>
    <Item>Positive feedback: {positivePercentage}%</Item>
  </Container>
);
