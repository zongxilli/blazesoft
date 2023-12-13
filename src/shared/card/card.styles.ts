import { styled } from 'styled-components';

export const Container = styled.div`
  height: min-content;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;

  background-color: ${(props) => props.theme.colors.elevatedBackgroundPrimary};

  ${(props) => props.theme.shadows.d1};
`;

export const Title = styled.h2``;

export const Subtitle = styled.h4``;

export const Description = styled.p``;

export const Content = styled.p``;
