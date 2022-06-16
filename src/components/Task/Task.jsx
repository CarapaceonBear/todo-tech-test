import React, {useState} from "react";
import "./Task.scss";

const Task = ({text, deleteTask}) => {
  
  const [completed, setCompleted] = useState(false);

  const checkIfComplete = () => {
    if (completed) {
      return (
        <>
          <input className="task__check--complete" id={"check " + text} type="checkbox"></input>
          <p className="task__text--complete">{text}</p>
        </>
      )
    } else {
      return (
        <>
          <input className="task__check" id={"check " + text} type="checkbox" onClick={markComplete}></input>
          <p className="task__text" onClick={markComplete}>{text}</p>
        </>
      )
    }
  }

  const markComplete = () => {
    setCompleted(true)
    document.getElementById("check " + text).checked = true;
  }


  return (
    <div className="task">
      {checkIfComplete()}
      <button className="task__bin" value={text} onClick={deleteTask}>bin</button>
    </div>
  )
}

export default Task