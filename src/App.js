import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./Widgets/Layout";
import { useEffect, useState } from "react";
import Loader from "./Widgets/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    fakeLoad();
  }, []);

  return (
    <HashRouter>
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      )}
    </HashRouter>
  );
}

export default App;
