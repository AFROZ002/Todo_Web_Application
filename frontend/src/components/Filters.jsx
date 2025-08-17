function Filters({ filter, setFilter, sortBy, setSortBy, search, setSearch }) {
  return (
    <div className="flex flex-wrap justify-between items-center bg-gray-900 p-4 rounded-lg mb-6 gap-3">
      {/* Search */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:border-red-600"
      />

      {/* Filters */}
      <div className="flex gap-3">
        <button
          className={`${filter === "all" ? "text-red-600" : "text-gray-300"} hover:text-white`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`${filter === "completed" ? "text-red-600" : "text-gray-300"} hover:text-white`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button
          className={`${filter === "pending" ? "text-red-600" : "text-gray-300"} hover:text-white`}
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
      </div>

      {/* Sort */}
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="bg-gray-800 text-gray-300 rounded p-2 border border-gray-700 focus:border-red-600"
      >
        <option value="latest">Latest First</option>
        <option value="created">Oldest First</option>
        <option value="due">By Due Date</option>
      </select>
    </div>
  );
}

export default Filters;
