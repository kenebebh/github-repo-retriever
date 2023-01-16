import { Link } from "react-router-dom";

const Navigation = ({ setExplode }) => {
  return (
    <nav className="bg-blue-600 p-2 h-12 sticky top-0 z-30 md:py-2 md:px-8">
      <ul className="flex justify-between">
        <li className="list-none">
          <Link
            to="/"
            className="no-underline text-white text-md hover:cursor-pointer hover:underline hover:decoration-double"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/repos"
            className="no-underline text-white text-md hover:cursor-pointer hover:underline hover:decoration-double"
          >
            Repos
          </Link>
        </li>
        <li>
          <button
            className="border-none text-white bg-inherit text-md"
            onClick={() => setExplode((e) => !e)}
          >
            Error Boundary
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
