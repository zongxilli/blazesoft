import { MouseEvent, PropsWithChildren } from 'react';

import { Container, Content, ModalMargin } from './modal.styles';

type ModalProps = PropsWithChildren<{
  height?: string;
  width?: string;
  noPadding?: boolean;
  noScroll?: boolean;
  zIndex?: number;
  onMarginClick?: (e: MouseEvent) => void;
  onPanelClick?: (e: MouseEvent) => void;
}>;

const Modal = ({
  height = 'auto',
  width = '21rem',
  noPadding = false,
  noScroll = false,
  onMarginClick = () => {},
  onPanelClick = () => {},
  children,
}: ModalProps) => {
  const handleMarginClick = (e: MouseEvent) => {
    // clicking the margin should "consume" the event, stopping it
    // from proceeding further up the DOM tree
    e.stopPropagation();
    onMarginClick(e);
  };

  const handlePanelClick = (e: MouseEvent) => {
    e.stopPropagation();
    onPanelClick(e);
  };

  return (
    <Container data-test-id='modal'>
      <ModalMargin onClick={handleMarginClick} data-test-id='modal_margin' />
      <Content
        $height={height}
        $width={width}
        $noPadding={noPadding}
        $noScroll={noScroll}
        onClick={handlePanelClick}
      >
        {children}
      </Content>
    </Container>
  );
};

export default Modal;
