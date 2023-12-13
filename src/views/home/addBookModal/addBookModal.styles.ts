import { css, styled } from 'styled-components';

type ButtonProps = {
  $green?: boolean;
  $disabled?: boolean;
};

export const Button = styled.button<ButtonProps>`
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  box-sizing: border-box;
  border-radius: 0.25rem;
  background-color: ${(props) =>
    props.$green
      ? props.theme.colors.greenDefault
      : props.theme.colors.redDefault};
  color: ${(props) => props.theme.colors.textPrimary};

  outline: none;
  border: none;

  ${(props) =>
    props.$disabled &&
    css`
      background-color: ${props.theme.colors.elevatedBackgroundTertiary};
      pointer-events: none;
    `}
`;

export const Input = styled.input``;

export const TextArea = styled.textarea``;
