import { Grid, GridItem, Todo } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectTodo } from 'redux/selectors';
import { delTodo } from 'redux/todoSlice';

export const TodoItem = () => {
  const todos = useSelector(selectTodo);
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const handleOnClick = id => {
    dispatch(delTodo(id));
  };

  const filteredTodos = todos.filter(item =>
    item.text.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <Grid>
      {todos.length > 0 &&
        filteredTodos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo
              id={todo.id}
              text={todo.text}
              counter={index + 1}
              onClick={() => handleOnClick(todo.id)}
            />
          </GridItem>
        ))}
    </Grid>
  );
};
