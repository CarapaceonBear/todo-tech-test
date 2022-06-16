import React, {useState} from "react";
import "./Main.scss";
import AddBox from "../../components/AddBox/AddBox";
import Task from "../../components/Task/Task";

const Main = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState(["test one", "test two"]);

  const updateText = (event) => {
    console.log(event.target.value);
  }

  const addTask = () => {
    console.log("I would like to add a task");
  }

  return (
    <div className="main">
      <AddBox updateText={updateText} addTask={addTask} />
      {taskList.map(task => {
        return <Task text={task} />
      })}
    </div>
  )
}

export default Main