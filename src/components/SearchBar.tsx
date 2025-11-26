import { Input } from "./ui/input";

const SearchBar = ({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (value: string) => void;
}) => {
  return (
    <div className="w-full flex place-content-center">
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Produce"
        className="w-8/10 border bg-white rounded-full px-4 py-5 shadow-sm outline-none"
      />
    </div>
  );
};
export default SearchBar;
