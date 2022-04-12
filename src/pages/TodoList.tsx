import { TodoProps } from "../types/todo";

interface Props {
  todos: TodoProps[];
}

export default function (props: Props) {
  console.log(props);
  return (
    <li>
      {props.todos?.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </li>
  );
}
