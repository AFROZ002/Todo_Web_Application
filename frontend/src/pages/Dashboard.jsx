// Dashboard.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddTask from "../components/AddTask";

import TaskList from "../components/TaskList";
import Filters from "../components/Filters";
import TaskCounter from "../components/TaskCounter";

function Dashboard() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("latest");
  const [search, setSearch] = useState("");

  // Current logged-in user
  const user = JSON.parse(localStorage.getItem("user"));
  const userEmail = user?.email;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || !userEmail) {
      alert("You must login first!");
      navigate("/login");
      return;
    }
    const savedTasks = JSON.parse(localStorage.getItem(`tasks_${userEmail}`)) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage
  const saveTasks = (updated) => {
    setTasks(updated);
    localStorage.setItem(`tasks_${userEmail}`, JSON.stringify(updated));
  };

  const handleAddTask = (task) => {
    const newTask = { ...task, id: Date.now(), createdAt: new Date(), completed: false };
    saveTasks([newTask, ...tasks]);
  };

  const handleToggle = (id) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    saveTasks(updated);
  };

  const handleDelete = (id) => {
    const updated = tasks.filter((t) => t.id !== id);
    saveTasks(updated);
  };

  const handleEdit = (id, updatedTask) => {
    const updated = tasks.map((t) => (t.id === id ? { ...t, ...updatedTask } : t));
    saveTasks(updated);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Filter + Sort + Search
  const filteredTasks = tasks
    .filter((t) =>
      filter === "completed" ? t.completed :
      filter === "pending" ? !t.completed : true
    )
    .filter((t) => t.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "latest") return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === "created") return new Date(a.createdAt) - new Date(b.createdAt);
      if (sortBy === "due" && a.dueDate && b.dueDate) return new Date(a.dueDate) - new Date(b.dueDate);
      return 0;
    });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-red-600">TodoApp</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded font-semibold hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      {/* Main Section */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <AddTask onAdd={handleAddTask} />
        <Filters
          filter={filter}
          setFilter={setFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
          search={search}
          setSearch={setSearch}
        />
        <TaskCounter tasks={tasks} />
        <TaskList
          tasks={filteredTasks}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default Dashboard;
