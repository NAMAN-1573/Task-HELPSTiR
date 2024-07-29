// src/components/Search.js
const Search = ({ searchTerm, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      className="border rounded-md transition-transform transform hover:scale-105  border-radius p-2 w-full mb-4 text-black font-bold"
    />
  );
};

export default Search;
