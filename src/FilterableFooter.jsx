import { FooterCounter } from "./FooterCounter";
import { FooterFilters } from "./FooterFilters";
import { FooterClear } from "./FooterClear";

export function FilterableFooter( {list, clearCompleted, filterHandler, currentFilter} ) {
  return (
    <>
      <div className="footer">
        <FooterCounter list={list}/>
        <FooterFilters filterHandler={filterHandler} currentFilter={currentFilter} />
        <FooterClear clearCompleted = {clearCompleted}/>
      </div>
    </>
  );
}
