import React from 'react';
import { Button, ContainerBtn } from './BtnFeedback.styled';

export const BtnFeedback = ({ onDecrement }) => (
  <ContainerBtn>
    <Button type="button" onClick={() => onDecrement('good')}>
      Good
    </Button>
    <Button type="button" onClick={() => onDecrement('neutral')}>
      Neutral
    </Button>
    <Button type="button" onClick={() => onDecrement('bad')}>
      Bad
    </Button>
  </ContainerBtn>
);
