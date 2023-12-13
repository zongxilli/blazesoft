import { css, styled } from 'styled-components';

type ContainerProps = {
  $clickable: boolean;
};

export const Container = styled.div<ContainerProps>`
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

  ${(props) =>
    props.$clickable &&
    css`
      cursor: pointer;

      &:hover {
        background-color: ${props.theme.colors.elevatedBackgroundTertiary};
      }
    `}
`;

export const Title = styled.h2``;

export const Subtitle = styled.h4``;

export const Description = styled.p``;

export const Content = styled.p``;

export const Button = styled.button`
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  box-sizing: border-box;
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.colors.redDefault};
  color: ${(props) => props.theme.colors.textPrimary};

  outline: none;
  border: none;
`;
