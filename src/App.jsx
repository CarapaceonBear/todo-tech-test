import React from "react";
import './App.scss';
import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";

function App() {

  const resetList = () => {
    console.log("I would like to reset");
  }


  return (
    <div className="app">
      <Header resetList={resetList} />
      <Main />
    </div>
  );
}

export default App;
