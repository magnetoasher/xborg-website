import ReactPaginate from "react-paginate";

export type PaginationType = {
  onPageChange: (selected: any) => void;
  pageCount: number;
  current: number;
};

export const Pagination = (data: PaginationType) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      forcePage={data.current}
      onPageChange={data.onPageChange}
      marginPagesDisplayed={2}
      pageRangeDisplayed={1}
      pageCount={data.pageCount}
      previousLabel="<"
      className="page-pagination lexend-body-xs2"
    />
  );
};
