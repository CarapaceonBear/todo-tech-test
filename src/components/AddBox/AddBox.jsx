import React from "react";
import "./AddBox.scss";

const AddBox = ({updateText, addTask}) => {

  return (
    <div className="add-box">
      <input className="add-box__text" type="text" placeholder="Add your task here..." onChange={updateText} />
      <button className="add-box__button" onClick={addTask}>
        <i className="fa-solid fa-circle-plus fa-2xl"></i>
      </button>
    </div>
  )
}

export default AddBox