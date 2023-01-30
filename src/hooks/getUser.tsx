import React from "react";
import { MyUser } from "../components/User";

const useUser = () => {
  const [error, setError] = React.useState("");
  const [choosedUser, setChoosedUser] = React.useState([] as Array<MyUser>);

  async function getUser(login: string) {
    try {
      setError("");
      const response = await fetch(
        `https://api.github.com/search/users?q=${login}&per_page=1`
      );
      const user = await response.json();
      console.log(user.items);
      setChoosedUser(user.items);
    } catch (e: any) {
      setError(e.message);
    }
  }

  return { choosedUser, error, getUser };
};

export default useUser;
