import React from "react";
import "./ResetButton.scss";

const ResetButton = ({name, onClick}) => {
  return (
    <button className="reset-button" onClick={onClick}>{name}</button>
  )
}

export default ResetButton