import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Splash from "./components/Splash";



export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <Splash onFinish={() => setShowSplash(false)} />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </>
  );
}
