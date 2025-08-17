import { useState } from "react";

function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return alert("Title is required");
    onAdd({ title, desc, dueDate });
    setTitle("");
    setDesc("");
    setDueDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 p-6 rounded-xl shadow mb-6"
    >
      <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-3 p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-600"
      />
      <textarea
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="w-full mb-3 p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-600"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="w-full mb-3 p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-600"
      />
      <button
        type="submit"
        className="w-full bg-red-600 py-2 rounded font-semibold hover:bg-red-700 transition"
      >
        Add Task
      </button>
    </form>
  );
}

export default AddTask;
