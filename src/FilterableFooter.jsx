import { FooterCounter } from "./FooterCounter";
import { FooterFilters } from "./FooterFilters";
import { FooterClear } from "./FooterClear";

export function FilterableFooter( {list, clearCompleted} ) {
  return (
    <>
      <div className="footer">
        <FooterCounter list={list}/>
        <FooterFilters />
        <FooterClear clearCompleted = {clearCompleted}/>
      </div>
    </>
  );
}
