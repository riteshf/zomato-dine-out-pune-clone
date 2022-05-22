import React from "react";
import Location from "./Location/Location";
import Search from "./Search/Search";
import styles from "./comboSearch.module.css";
const ComboSearch = () => {
  return (
    <div data-cy="combo-search" className={styles.comboSearch}>
      <Location />
      <Search />
    </div>
  );
};

export default ComboSearch;
