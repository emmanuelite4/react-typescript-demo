import { useState } from "react";
import { TodoProps } from "../types/todo";

interface Props {
  onSubmit: (value: TodoProps) => void;
}

export default function CreateTodo(props: Props) {
  const [value, setValue] = useState<{ title: string; description: string }>();

  const handleChange = (event) => {
    setValue((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const object = {
      ...value,
      createdAt: new Date().toJSON()
      id: Math.random()
    };
    props.onSubmit(object);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        onChange={handleChange}
        value={value?.title}
        style={{ display: "block" }}
      />
      <textarea
        name="description"
        onChange={handleChange}
        style={{ display: "block" }}
        value={value?.description}
      />
      <button>Submit</button>
    </form>
  );
}
