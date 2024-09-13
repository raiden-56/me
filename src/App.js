import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Widgets/Layout";
import { useEffect, useState } from "react";
import Loader from "./Widgets/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fake = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 10000);
    };
    fake();
  });
  return (
    <BrowserRouter>
      <Routes>
        {isLoading ? (
          <Loader />
        ) : (
          <Route strict path={"/"} element={<Layout />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
