import { Props } from "./Interface";

export default function Todo({ tasks, handleDel, handleCheck }: Props) {
  return (
    <div className="w-full p-4">
      {tasks.map((item) => (
        <div
          className="flex flex-row items-center gap-4 w-full py-4 border-b"
          key={item.id}
        >
          <input
            type="checkbox"
            checked={item.completed}
            onClick={() => handleCheck(item.id)}
            className="w-6 h-6 text-white bg-white border rounded-md focus:ring-blue-500 dark:focus:ring-blue-600 dark:bg-blue-600 checked:accent-blue-700"
          />
          <p
            className={`${
              item.completed ? "line-through" : null
            } w-[600px] px-4`}
          >
            {item.task}
          </p>
          <button
            className="bg-red-700 text-white text-xl font-bold px-2 rounded-full"
            onClick={() => handleDel(item.id)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
