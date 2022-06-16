import React from "react";
import "./Header.scss";
import ResetButton from "../../components/ResestButton/ResetButton";

const Header = ({resetList}) => {
  
  return (
    <div className="header">
      <h1 className="header__title">My Todos</h1>
      <ResetButton className="header__button" name="Reset" onClick={resetList} />
    </div>
  )
}

export default Header