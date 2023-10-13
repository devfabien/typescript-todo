import { useState } from "react";
import { nanoid } from "nanoid";
import Todo from "./Todo";
import { Todos } from "./Interface";

export default function TodoForm({}) {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState<Todos[]>([]);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTodoList((prevTodo) => [
      ...prevTodo,
      {
        id: nanoid(),
        task: input,
        completed: false,
      },
    ]);
    setInput("");
  }

  function handleDel(id: string) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  function handleCheck(id: string) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  return (
    <>
      <form
        className="px-4 py-2 rounded-full flex justify-between shadow-md shadow-zinc-600 w-1/2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Add todo....."
          onChange={handleChange}
          value={input}
          className="outline-none w-full"
        />
        <button
          type="submit"
          className="bg-green-600 rounded-full text-white text-2xl px-2 pb-1 hover:bg-green-700 font-bold"
        >
          +
        </button>
      </form>
      <div className="flex flex-col gap-7">
        <Todo
          tasks={todoList}
          handleDel={handleDel}
          handleCheck={handleCheck}
        />
      </div>
    </>
  );
}
