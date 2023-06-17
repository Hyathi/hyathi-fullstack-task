import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Popup from "./components/Popup/Popup";

function App() {
  var User = false;
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    if (User) {
      setPopup(false);
    } else {
      setPopup(true);
    }
  }, [User]);

  return (
    <div className="App">
      <BrowserRouter>
        <Popup trigger={popup} setTrigger={setPopup} onClose={popup}>
        </Popup>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
