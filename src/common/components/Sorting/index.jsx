import './index.scss';

import FilterButton from "../Filter-button";
import SearchInput from "../Search-input";

const Sorting = () => {
  return (
    <div className="sorting_wrap">
      <SearchInput />
      <FilterButton />

    </div>
  )
}

export default Sorting;