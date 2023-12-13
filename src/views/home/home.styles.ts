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

export const Navbar = styled.div`
  z-index: ${(props) => props.theme.zIndexes.navBar};

  position: fixed;
  top: 0;
  left: 0;
  padding: 1vh 0;

  width: 100vw;
  height: min-content;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.systemBackgroundPrimary};
  ${(props) => props.theme.shadows.d1};
`;

export const Button = styled.button`
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  box-sizing: border-box;
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.colors.systemBackgroundSecondary};
  color: ${(props) => props.theme.colors.textPrimary};

  outline: none;
  border: 1px solid ${(props) => props.theme.colors.grey4};
`;
