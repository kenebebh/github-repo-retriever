import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Pagination from "../components/Pagination";
import { Helmet } from "react-helmet-async";
import Searchbar from "../components/Searchbar";
import { Username } from "../components/UsernameContext";

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const { username } = useContext(Username);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Fetch users repositories from Github API
    fetchDataFromGithub();
  }, [username]);

  function fetchDataFromGithub() {
    setError(false);
    axios({
      method: "get",
      url: `https://api.github.com/users/${username}/repos`,
    })
      .then((res) => {
        setRepos(res.data);
      })
      .catch((error) => {
        setError(true);
        setErrorMessage(error.response.data.message);
        console.error(error.response.status);
      });
    //catch the error here
  }

  return (
    <div className="repos">
      <Helmet>
        <title>Repos Page</title>
        <meta
          name="description"
          content="All users github repositories are displayed here"
        ></meta>
        <link rel="canonical" href="/repos" />
      </Helmet>
      {error ? (
        <div className="text-white/90">
          <p>{errorMessage}</p>
          <p className="pb-2">Sorry, no user was found. Please try again</p>
          <Searchbar />
        </div>
      ) : (
        <div className="flex items-center flex-col gap-8">
          <p className="text-xl italic text-blue-700 font-bold w-full pl-2 text-left lg:text-center">
            {username}
          </p>
          <Outlet />
          <Searchbar />
          <Pagination data={repos} />
        </div>
      )}
    </div>
  );
};

export default Repos;
