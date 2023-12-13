import { PropsWithChildren } from 'react';

import {
  Button,
  Container,
  Content,
  Description,
  Subtitle,
  Title,
} from './card.styles';

type CardType = PropsWithChildren<{
  title: string;
  subTitle: string | number;
  description: string;
  actionText?: string;
  action?: () => void;
  onClick?: () => void;
}>;

const Card = ({
  title,
  subTitle,
  description,
  actionText = '',
  action = () => {},
  onClick,
  children,
}: CardType) => {
  const renderTitle = () => <Title>{title}</Title>;
  const renderSubtitle = () => <Subtitle>{subTitle}</Subtitle>;
  const renderDescription = () => <Description>{description}</Description>;
  const renderChildren = () => <Content>{children}</Content>;
  const renderActionButton = () => {
    if (!actionText) return null;
    return <Button onClick={action}>{actionText}</Button>;
  };

  return (
    <Container onClick={onClick} $clickable={!!onClick}>
      {renderTitle()}
      {renderSubtitle()}
      {renderDescription()}
      {renderChildren()}
      {renderActionButton()}
    </Container>
  );
};

export default Card;
