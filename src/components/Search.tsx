
import { SearchProps } from "../types/interfaces";
import { FaSearch } from "react-icons/fa";
import FilterRegions from "./FilterRegions";

const Search = ({ searchCountries, setCountries, searchInput }: SearchProps) => {
  return (
    <article className="search-section">
      <section className="input-block">
        <FaSearch className="search-icon" />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          value={searchInput}
          onChange={(e) => searchCountries(e.target.value)}
        />
      </section>
      <FilterRegions setCountries={setCountries} />
    </article>
  );
};

export default Search;
