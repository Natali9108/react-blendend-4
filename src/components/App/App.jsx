import { Container, Header, SearchForm, Section, Text } from 'components';

import { TodoItem } from 'components/TodoItem/TodoItem';
import { useSelector } from 'react-redux';
import { selectTodo } from 'redux/selectors';

export const App = () => {
  const todos = useSelector(selectTodo);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}
          <TodoItem />
        </Container>
      </Section>
    </>
  );
};
