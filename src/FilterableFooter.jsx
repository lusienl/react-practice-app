import { FooterCounter } from "./FooterCounter";
import { FooterFilters } from "./FooterFilters";
import { FooterClear } from "./FooterClear";

export function FilterableFooter( {list, clearCompleted, filterHandler} ) {
  return (
    <>
      <div className="footer">
        <FooterCounter list={list}/>
        <FooterFilters filterHandler={filterHandler}/>
        <FooterClear clearCompleted = {clearCompleted}/>
      </div>
    </>
  );
}
