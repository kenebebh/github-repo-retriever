import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Repos from "./pages/Repos";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./components/Fallback";
import DetailsDisplay from "./components/DetailsDisplay";
import { ClickedRepoDetails } from "./components/ClickedRepoDetails";
import { Username } from "./components/UsernameContext";

import "./index.css";

function App() {
  function Bomb() {
    throw new Error("💥 CABOOM 💥");
  }

  const [explode, setExplode] = useState(false);
  const [clickedRepoDetails, setClickedRepoDetails] = useState({});
  const [username, setUsername] = useState("kenebebh");

  return (
    <Router>
      <div className="w-full min-h-screen relative bg-black/10">
        <Navigation setExplode={setExplode} />
        <ErrorBoundary
          FallbackComponent={Fallback}
          onReset={() => setExplode(false)}
          resetKeys={[explode]}
        >
          {explode ? <Bomb /> : null}
          <div className="h-95 p-2 mt-12">
            <ClickedRepoDetails.Provider
              value={{ clickedRepoDetails, setClickedRepoDetails }}
            >
              <Username.Provider value={{ username, setUsername }}>
                <Routes>
                  <Route path="/" element={<Repos />} />
                  <Route path="/repos" element={<Home />}>
                    <Route path=":repoName" element={<DetailsDisplay />} />
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Username.Provider>
            </ClickedRepoDetails.Provider>
          </div>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
