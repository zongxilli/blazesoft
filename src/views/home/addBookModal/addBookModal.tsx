import { useState } from 'react';

import { useAppSelector } from '../../../hooks';
import { BookInfo } from '../../../reducers/book';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '../../../shared';

import { Button, Input, TextArea } from './addBookModal.styles';

type AddBookModalProps = {
  onSave: (bookInfo: BookInfo) => void;
  closeModal: () => void;
  selectedBookId?: string | null;
};

const AddBookModal = ({
  onSave,
  closeModal,
  selectedBookId,
}: AddBookModalProps) => {
  const { items } = useAppSelector((state) => state.book);
  const selectedBook = items.find((book) => book.id === selectedBookId);

  const [name, setName] = useState(selectedBook?.name ?? '');
  const [price, setPrice] = useState(selectedBook?.price ?? '');
  const [category, setCategory] = useState(selectedBook?.category ?? '');
  const [description, setDescription] = useState(
    selectedBook?.description ?? '',
  );

  const renderModalHeader = () => <ModalHeader>Add a new book</ModalHeader>;
  const renderModalBody = () => (
    <ModalBody>
      <Input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type='number'
        placeholder='Price'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <Input
        type='text'
        placeholder='Category'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <TextArea
        placeholder='Description'
        rows={3}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </ModalBody>
  );

  const renderModalFooter = () => (
    <ModalFooter>
      <Button onClick={closeModal}>Close</Button>
      <Button
        $green
        onClick={() => {
          onSave({
            name,
            price,
            category,
            description,
            id: selectedBook?.id,
          });

          closeModal();
        }}
        $disabled={!name || !price || !category || !description}
      >
        Save
      </Button>
    </ModalFooter>
  );

  const renderModalContent = () => (
    <>
      {renderModalHeader()}
      {renderModalBody()}
      {renderModalFooter()}
    </>
  );

  return <Modal onMarginClick={closeModal}>{renderModalContent()}</Modal>;
};

export default AddBookModal;
