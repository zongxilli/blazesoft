import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100dvw;
  height: 100dvh;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  background-color: ${(props) => props.theme.colors.systemBackgroundPrimary};
`;

export const Content = styled.div`
  width: 80%;
  height: auto;

  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
`;
