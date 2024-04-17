import React from "react";

const Home = () => {
  const userEmail = import.meta.env.VITE_USER;
  const userName = import.meta.env.VITE_NAME;
  return (
    <div>
      My name is Utkarsh kushwaha changes done 2 dev se aaya hai.
      <h1>VITE_USER : {userEmail || "Not found"}</h1>
      <h1>VITE_NAME : {userName || "Not found"}</h1>
    </div>
  );
};

export default Home;
