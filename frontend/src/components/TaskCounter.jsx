function TaskCounter({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <div className="flex justify-center gap-6 text-gray-300 text-sm mb-6">
      <span>Total: <span className="text-white">{total}</span></span>
      <span>Completed: <span className="text-green-500">{completed}</span></span>
      <span>Pending: <span className="text-red-500">{pending}</span></span>
    </div>
  );
}

export default TaskCounter;
