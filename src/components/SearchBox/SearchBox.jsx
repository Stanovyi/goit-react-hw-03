import { CiSearch } from "react-icons/ci";
import { nanoid } from "nanoid";
import s from "./SearchBox.module.css";

const SearchBox = ({ filterValue, onFilter }) => {
  const searchBoxId = nanoid();

  return (
    <div className={s.searchContainer}>
      <label htmlFor={searchBoxId}>
        <CiSearch size={12} />
        Find contacts by name
      </label>
      <input
        className={s.SearchField}
        type="text"
        placeholder="Start typing something"
        id={searchBoxId}
        value={filterValue}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
