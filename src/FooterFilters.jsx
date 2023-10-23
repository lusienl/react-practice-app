const footerFilters = ["All", "Active", "Completed"];

export function FooterFilters( {filterHandler} ) {
  return (
    <>
      <ul className="filters">
        {footerFilters.map((filterType) => (
          <li key={filterType} className={filterType} onClick={() => filterHandler(filterType)}>
            {filterType}
          </li>
        ))}
      </ul>
    </>
  );
}
