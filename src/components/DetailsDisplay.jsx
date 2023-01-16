import { ClickedRepoDetails } from "./ClickedRepoDetails";
import { useContext } from "react";
import { RiLinksLine } from "react-icons/ri";

const DetailsDisplay = () => {
  const { clickedRepoDetails, setClickedRepoDetails } =
    useContext(ClickedRepoDetails);

  return (
    <div className="bg-indigo-800 pt-2 pr-0 pb-8 pl-8 shadow-lg border-2 text-blue-200 w-full md:w-10/12 lg:w-1/2 xl:w-1/3">
      <div className="py-2 flex items-center">
        <span className="text-white text-2xl font-bold pb-2">
          {clickedRepoDetails.name}
        </span>
      </div>
      <div className="py-2 flex items-center">
        <label className="label">Description: </label>
        <span className="value">
          {clickedRepoDetails.description || "No Description provided"}
        </span>
      </div>
      <div className="py-2 flex items-center">
        <label className="label">Created at </label>
        <span className="value">
          {Object.keys(clickedRepoDetails).length !== 0
            ? new Date(clickedRepoDetails.created_at).toDateString()
            : " "}
        </span>
        <label className="label"> || Last Updated at </label>
        <span className="value">
          {Object.keys(clickedRepoDetails).length !== 0
            ? new Date(clickedRepoDetails.updated_at).toDateString()
            : " "}
        </span>
      </div>
      <div className="py-2 flex items-center">
        <label className="label">Primary Language: </label>
        <span className="value">{clickedRepoDetails.language}</span>
      </div>
      <div className="py-2 flex items-center">
        <RiLinksLine className="text-white" />
        <a
          href={clickedRepoDetails.svn_url}
          className="text-amber-500 underline-none pt-1 pl-1 block hover:text-amber-600"
        >
          Github Link
        </a>
      </div>
    </div>
  );
};

export default DetailsDisplay;
