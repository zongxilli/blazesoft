import { useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { actions as bookActions } from '../../reducers/book';
import { Card } from '../../shared';

import { Container, Content } from './home.styles';

const Home = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.book);

  const books = useMemo(() => items, [items]);

  const renderContent = () => {
    return (
      <Content>
        {books.map((book) => (
          <Card
            key={book.id}
            title={book.name}
            subTitle={`$${book.price}`}
            description={book.category}
            actionText='Delete book'
            action={() => dispatch(bookActions.deleteBookRequest(book.id))}
          >
            {book.description}
          </Card>
        ))}
      </Content>
    );
  };

  return (
    <Container
    // onClick={() => {
    //   dispatch(
    //     bookActions.addBookRequest({
    //       name: 'book1',
    //       price: 10,
    //       category: 'history',
    //       description: 'Description of test 1',
    //     }),
    //   );
    // }}
    >
      {renderContent()}
    </Container>
  );
};

export default Home;
