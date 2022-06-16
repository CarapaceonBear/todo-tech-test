import React from "react";
import "./Task.scss";

const Task = ({text}) => {
  return (
    <div className="task">
      <input type="checkbox"></input>
      <p className="task__text">{text}</p>
      <button className="task__bin">bin</button>
    </div>
  )
}

export default Task