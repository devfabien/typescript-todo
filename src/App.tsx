import TodoForm from "./components/TodoForm";

export default function App() {
  return (
    <div className="p-4 flex flex-col h-screen items-center w-full">
      <h1 className="py-6 text-gray-300 text-8xl font-semibold">todos</h1>
      <TodoForm />
    </div>
  );
}
