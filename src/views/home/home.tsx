import { useMemo, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { actions as bookActions, BookInfo } from '../../reducers/book';
import { Card } from '../../shared';

import AddBookModal from './addBookModal/addBookModal';
import { Button, Container, Content, Navbar } from './home.styles';

const Home = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.book);

  const [showModifyBookModal, setShowModifyBookModal] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);

  const books = useMemo(() => items, [items]);

  const renderNavbar = () => (
    <Navbar>
      <Button onClick={() => setShowModifyBookModal(true)}>Add new book</Button>
    </Navbar>
  );

  const renderAddBookModal = () => {
    if (!showModifyBookModal) return null;
    return (
      <AddBookModal
        onSave={(bookInfo: BookInfo) =>
          dispatch(bookActions.addBookRequest(bookInfo))
        }
        closeModal={() => {
          setSelectedBookId(null);
          setShowModifyBookModal(false);
        }}
        selectedBookId={selectedBookId}
      />
    );
  };

  const renderBooks = () => {
    const sortedBooks = books.sort((a, b) => a.name.localeCompare(b.name));

    return sortedBooks.map((book) => (
      <Card
        key={book.id}
        title={book.name}
        subTitle={`$${book.price}`}
        description={book.category}
        actionText='Delete book'
        action={() => dispatch(bookActions.deleteBookRequest(book.id))}
        onClick={() => {
          setSelectedBookId(book.id);
          setShowModifyBookModal(true);
        }}
      >
        {book.description}
      </Card>
    ));
  };

  const renderContent = () => {
    return (
      <Content>
        {renderNavbar()}
        {renderBooks()}
        {renderAddBookModal()}
      </Content>
    );
  };

  return <Container>{renderContent()}</Container>;
};

export default Home;
