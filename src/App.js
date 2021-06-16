import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import Nav from "./components/nav/Nav";
import ChatBody from "./components/chatBody/ChatBody";
function App() {
  return (
    <div className="_main">
      <Nav />
      <ChatBody />
    </div>
  );
}

export default App;
