import { styled } from 'styled-components';

export const Container = styled.div`
  height: 10rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 1rem;

  background-color: ${(props) => props.theme.colors.elevatedBackgroundPrimary};
`;
