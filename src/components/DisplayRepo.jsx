import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ClickedRepoDetails } from "./ClickedRepoDetails";
import { Username } from "./UsernameContext";

const DisplayRepo = ({ repo }) => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { clickedRepoDetails, setClickedRepoDetails } =
    useContext(ClickedRepoDetails);
  const { username } = useContext(Username);

  const getDetails = (repoName) => {
    axios({
      method: "get",
      url: `https://api.github.com/repos/${username}/${repoName}`,
    }).then((res) => {
      setData(res.data);
      navigate(`/repos/${repoName}`);
    });
  };

  return (
    <div
      onClick={() => {
        getDetails(repo.name);
        setClickedRepoDetails(repo);
      }}
      key={repo.id}
      className="bg-indigo-800/90 shadow-lg w-64 py-8 px-4 rounded-lg text-white hover:cursor-pointer hover:text-amber-400 md:w-96"
    >
      <h2 className="text-lg">{repo.name}</h2>
    </div>
  );
};

export default DisplayRepo;
