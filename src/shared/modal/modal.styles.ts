import { styled } from 'styled-components';

import Breakpoints from '../../theme/breakpoints';

export const Container = styled.div`
  z-index: ${(props) => props.theme.zIndexes.modal};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;
`;

export const ModalMargin = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: ${(props) => props.theme.colors.overlay};
`;

type ContentProps = {
  $height: string;
  $width: string;
  $noPadding: boolean;
  $noScroll: boolean;
};

export const Content = styled.div<ContentProps>`
  position: relative;
  padding: ${(props) => (props.$noPadding ? '0' : '1rem')};
  border-radius: 0.3rem;
  box-sizing: border-box;
  max-height: calc(100% - 10rem);
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
  display: flex;
  flex-direction: column;
  text-align: left;
  overflow-y: ${(props) => (props.$noScroll ? 'hidden' : 'auto')};
  background-color: ${(props) => props.theme.colors.elevatedBackgroundPrimary};
  color: ${(props) => props.theme.colors.textPrimary};
  ${(props) => props.theme.shadows.d3};
  gap: 2rem;

  @media (max-width: ${Breakpoints.mediumWidth}) {
    max-height: 100vh;
    @supports (max-height: 100dvh) {
      max-height: 100dvh;
    }
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  pointer-events: none;
`;

export const ModalBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
`;

export const ModalFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`;
