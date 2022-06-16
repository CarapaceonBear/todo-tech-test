import React from "react";
import "./AddBox.scss";

const AddBox = ({updateText, addTask}) => {

  return (
    <form className="add-box">
      <input className="add-box__text" type="text" placeholder="Add your task here..." onChange={updateText} />
      <button className="add-box__button" onClick={addTask}></button>
    </form>
  )
}

export default AddBox