import React from "react";
import "./App.css";

function App() {
  const userEmail = import.meta.env.VITE_USER;
  const userName = import.meta.env.VITE_NAME;
  return (
    <>
      My name is Utkarsh kushwaha changes done.
      <h1>VITE_USER : {userEmail || "Not found"}</h1>
      <h1>VITE_NAME : {userName || "Not found"}</h1>
    </>
  );
}

export default App;
