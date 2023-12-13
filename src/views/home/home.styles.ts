import { styled } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  background-color: ${(props) => props.theme.colors.systemBackgroundPrimary};
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;

  display: grid;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));

  box-sizing: border-box;
  padding: 10dvh 10%;
`;
