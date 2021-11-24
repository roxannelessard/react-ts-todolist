// React.FC (functional component) is already generic type
// <{}> this define an object type with array of strings for the component props
const Todos: React.FC<{items: string[]}> = (props) => {
  return (
  <ul>
    {props.items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
  );
};

export default Todos;
