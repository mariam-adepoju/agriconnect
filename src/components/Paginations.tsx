interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

function Paginations({ page, setPage, totalPages }: PaginationProps) {
  return (
    <div className="flex justify-center gap-3 mt-8">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="border px-3 py-1 rounded disabled:opacity-50"
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`w-8 h-8 rounded-full ${
            page === i + 1 ? "bg-orange-400 text-white" : "bg-white border"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="border px-3 py-1 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
export default Paginations;
