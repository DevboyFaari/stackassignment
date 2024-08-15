// components/SearchSort.js
import { useState } from 'react';

const SearchSort = ({ onSearch, onSort }) => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('name');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
    onSort(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={handleSearchChange}
      />
      <select value={sort} onChange={handleSortChange}>
        <option value="name">Sort by Name</option>
        <option value="company">Sort by Company</option>
      </select>
    </div>
  );
};

export default SearchSort;
