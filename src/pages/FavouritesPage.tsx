import React from "react";
import { useSearchUsersQuery } from "../store/github/github.api";

const FavouritesPage = () => {
  const [search, setSearch] = React.useState("");
  const { isLoading, isError, data } = useSearchUsersQuery("pablus");
  React.useEffect(() => console.log(search));
  React.useMemo(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      {isError && <h1>Something got wrong...</h1>}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ fontSize: 40, margin: 20 }}
        type="text"
        placeholder="Search GitHub users..."
      />
      <h1>FAV</h1>
    </div>
  );
};

export default FavouritesPage;
