import { connect } from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../reducers/selectors';

const mapStateToProps = (store) => ({
  todos: allTodos(store)
}); 

const mDP = (dispatch) => ({
  recieveTodo: (todo) => dispatch(recieveTodo(todo))
});

const TodoListContainer = connect(mapStateToProps, mDP)(TodoList);