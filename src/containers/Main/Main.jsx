import React, {useState} from "react";
import "./Main.scss";
import AddBox from "../../components/AddBox/AddBox";
import Task from "../../components/Task/Task";

const Main = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

  const updateText = (event) => {
    console.log(event.target.value);
    setInputText(event.target.value);
  }

  const addTask = () => {
    const temp = taskList.map(task => {
      return task;
    });
    temp.push(inputText);
    setTaskList(temp)
  }

  return (
    <div className="main">
      <AddBox updateText={updateText} addTask={addTask} trigger={taskList} />
      {(taskList || []).map(task => {
        return <Task text={task} />
      })}
    </div>
  )
}

export default Main