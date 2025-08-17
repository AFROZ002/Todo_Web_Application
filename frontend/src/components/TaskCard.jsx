import { useState } from "react";

function TaskCard({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [desc, setDesc] = useState(task.desc);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handleSave = () => {
    onEdit(task.id, { title, desc, dueDate });
    setIsEditing(false);
  };

  return (
    <div
      className={`p-4 rounded-lg shadow bg-gray-900 border ${
        task.completed ? "border-green-600" : "border-red-600"
      }`}
    >
      {isEditing ? (
        <div className="space-y-2">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />
          <button
            onClick={handleSave}
            className="bg-red-600 px-4 py-1 rounded hover:bg-red-700 transition"
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <h3 className={`text-lg font-semibold ${task.completed ? "line-through text-green-500" : ""}`}>
              {task.title}
            </h3>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
              className="w-5 h-5"
            />
          </div>
          <p className="text-gray-400">{task.desc}</p>
          <p className="text-sm text-gray-500">
            Created: {new Date(task.createdAt).toLocaleDateString()}{" "}
            {task.dueDate && `| Due: ${task.dueDate}`}
          </p>
          <div className="mt-2 flex gap-3">
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-400 hover:underline"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskCard;
