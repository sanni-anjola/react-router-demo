import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./components/Modal";

const App = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <h1>Welcome to my app</h1>
      <button onClick={() => setOpen(true)}>Open modal</button>
      {createPortal(
        <Modal open={open} setOpen={setOpen} closeOnClick>
          <h1>A modal demo</h1>
          <button onClick={() => setOpen(false)}>Close modal</button>
        </Modal>,
        document.querySelector("#modal")
      )}
    </>
  );
};

export default App;
