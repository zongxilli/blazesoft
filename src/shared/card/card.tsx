import { PropsWithChildren } from 'react';

import {
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
}>;

const Card = ({ title, subTitle, description, children }: CardType) => {
  const renderTitle = () => <Title>{title}</Title>;
  const renderSubtitle = () => <Subtitle>{subTitle}</Subtitle>;
  const renderDescription = () => <Description>{description}</Description>;
  const renderChildren = () => <Content>{children}</Content>;

  return (
    <Container>
      {renderTitle()}
      {renderSubtitle()}
      {renderDescription()}
      {renderChildren()}
    </Container>
  );
};

export default Card;
