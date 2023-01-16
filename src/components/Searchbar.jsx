import { useContext, useState } from "react";
import axios from "axios";
import { Username } from "./UsernameContext";

const Searchbar = () => {
  const [loading, setLoading] = useState(false);
  const { username, setUsername } = useContext(Username);
  const [holdUsername, setHoldUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setUsername(holdUsername);
    searchRepos();
  }

  function searchRepos() {
    setLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/users/${username}/repos`,
    })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
        console.error(error.response.status);
      });
    //catch the error here
  }

  return (
    <form className="form">
      <input
        type="text"
        className="h-12 border-2 border-gray-600 rounded-lg text-md pl-2 bg-white/75 text-black/90 focus:outline-none focus:border-2 md:pl-8 placeholder:italic placeholder:text-slate-400"
        placeholder="Enter a Github Username"
        onChange={(e) => setHoldUsername(e.target.value)}
      />
      <button
        className="bg-indigo-700 rounded-lg border-none text-lg text-white ml-2 md:ml-4 cursor-pointer p-2 focus:outline-none"
        onClick={handleSubmit}
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default Searchbar;
