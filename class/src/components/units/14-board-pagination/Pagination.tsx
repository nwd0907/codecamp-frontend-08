import { MouseEvent, useState } from "react";

export default function Pagination(props: any) {
  const [startPage, setStartPage] = useState(1);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (!(event.target instanceof HTMLSpanElement)) return;
    props.refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= props.lastPage) {
      setStartPage((prev) => prev + 10);
      props.refetch({ page: startPage + 10 });
    }
  };

  return (
    <div>
      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= props.lastPage && (
            <span
              key={index + startPage}
              id={String(index + startPage)}
              onClick={onClickPage}
            >
              {" "}
              {index + startPage}
            </span>
          )
      )}
      <span onClick={onClickNextPage}>다음페이지</span>
    </div>
  );
}
