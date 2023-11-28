import {
  Button,
  ContainerBtn,
} from 'components/BtnFeedback/BtnFeedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ContainerBtn>
    {options.map(option => (
      <Button key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </Button>
    ))}
  </ContainerBtn>
);
