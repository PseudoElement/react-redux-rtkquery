import React from "react";
import {
  useLazyGetUserReposQuery,
  useSearchUsersQuery,
} from "../store/github/github.api";
import { useDebounce } from "../hooks/useDebounce";

import "./styles/FavouritesPageStyle.css";
import RepositoryItem from "../components/RepositoryItem";
import useUser from "../hooks/getUser";
import User from "../components/User";

const FavouritesPage = () => {
  const [search, setSearch] = React.useState<string>("");
  const debounced = useDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  });
  const { choosedUser, getUser, error } = useUser();
  const [fetchRepos, { isLoading: areReposLoading, data: repos }] =
    useLazyGetUserReposQuery();

  const clickHandler = (username: string) => {
    fetchRepos(username);
  };

  React.useEffect(() => {
    console.log(repos);
  }, [repos]);

  return (
    <div className="usersPage-wrapper">
      {isError && <h1>Something got wrong...</h1>}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Input GitHub nickname..."
      />
      {data && (
        <ul>
          {isLoading && <h1>Wait a minute, content is loading...</h1>}
          {data.map((user) => (
            <li
              onClick={() => {
                clickHandler(user.login);
                getUser(user.login);
                setSearch("")
              }}
              key={user.id}
            >
              {user.login}
            </li>
          ))}
        </ul>
      )}

      {error && <h1>{error}</h1>} 
      {typeof choosedUser === "object" &&
        choosedUser !== null &&
        choosedUser.length !== 0 && (
          <User
            key={choosedUser[0].id}
            avatar_url={choosedUser[0].avatar_url}
            login={choosedUser[0].login}
            html_url={choosedUser[0].html_url}
            type={choosedUser[0].type}
          >
            {areReposLoading && <p className="text-center">Repos are loading...</p>}
        {repos && (
          <>
            <h1>Total amount: {repos.length}</h1>
            <div>
              {repos.map((repository: any, index:number) => {
                return (
                  <RepositoryItem
                  index={index}
                    url={repository.html_url}
                    language={repository.language}
                    name={repository.name}
                    visibility={repository.visibility}
                  />
                );
              })}
            </div>
          </>
        )}
          </User>
        )}
      {typeof choosedUser !== "object" && (
        <h1>GitHub on cooldown, please wait...</h1>
      )}
    </div>
  );
};

export default FavouritesPage;
