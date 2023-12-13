import { useAppDispatch, useAppSelector } from '../../hooks';
import { actions as themeActions } from '../../reducers/theme';

import { Container, Content } from './home.styles';

const Home = () => {
  const dispatch = useAppDispatch();
  const { mode } = useAppSelector((state) => ({
    mode: state.theme.mode,
  }));

  const renderContent = () => {
    return <Content></Content>;
  };

  return (
    <Container
      onClick={() =>
        dispatch(
          themeActions.changeThemeModeRequest(
            mode === 'dark' ? 'light' : 'dark',
          ),
        )
      }
    >
      {renderContent()}
    </Container>
  );
};

export default Home;
