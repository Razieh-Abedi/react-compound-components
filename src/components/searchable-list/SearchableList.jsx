import { useState, useRef } from "react";

export default function SearchableList({ items, itemKeyFn, children }) {
  const lastChange = useRef();
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setInputValue(value);

    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchTerm(value);
    }, 500);
  }

  const searchedItems = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="searchable-list">
      <input
        type="search"
        placeholder="Search"
        value={inputValue}
        onChange={handleChange}
      />
      <ul>
        {searchedItems &&
          searchedItems.map((item) => (
            <li key={itemKeyFn(item)}>{children(item)}</li>
          ))}
      </ul>
    </div>
  );
}
