// React.FC (functional component) is already generic type
// <{}> this define an object type with array of strings for the component props
// the class Todo becomes a type
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css'

const Todos: React.FC<{items: Todo[]}> = (props) => {
  return (
  <ul className={classes.todos}>
    {props.items.map((item) => (
      <TodoItem key={item.id} text={item.text}/>
    ))}
  </ul>
  );
};

export default Todos;
