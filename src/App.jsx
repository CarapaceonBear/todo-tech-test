import React, {useState} from "react";
import './App.scss';
import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";

function App() {

  const [reset, setReset] = useState(0);

  const resetList = () => {
    console.log("hi");
    setReset(reset + 1);
    console.log(reset);
  }


  return (
    <div className="body">
      <div className="app">
        <Header resetList={resetList} />
        <Main reset={reset}/>
      </div>
    </div>
  );
}

export default App;
