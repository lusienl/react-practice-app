const footerFilters = ["All", "Active", "Completed"];

export function FooterFilters({ filterHandler, currentFilter }) {
  return (
    <>
      <ul className="filters">
        {footerFilters.map((filterType) => (
          <li
            key={filterType}
            className={`${filterType}${filterType === currentFilter ? " selected" : ""}`} // adding additional space before selected
            onClick={() => filterHandler(filterType)}
          >
            {filterType}
          </li>
        ))}
      </ul>
    </>
  );
}
