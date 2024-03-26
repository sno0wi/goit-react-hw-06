import css from '../SearchBox/SearchBox.module.css';

const SearchBox = ({ searchContact }) => {
  const hendleChange = e => {
    const searchName = e.target.value;
    searchContact(searchName);
  };
  return (
    <div className={css.searchWrapper}>
      <label className={css.label}>
        <span className={css.text}>Find contacts by name</span>
        <input
          type="text"
          placeholder="Enter name"
          name="searchName"
          onChange={hendleChange}
          className={css.searchName}
        />
      </label>
    </div>
  );
};

export default SearchBox;
