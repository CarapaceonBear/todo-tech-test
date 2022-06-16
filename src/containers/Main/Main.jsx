import React, {useState, useEffect} from "react";
import "./Main.scss";
import AddBox from "../../components/AddBox/AddBox";
import Task from "../../components/Task/Task";

const Main = ({reset}) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

  const updateText = (event) => {
    setInputText(event.target.value);
  }

  const addTask = () => {
    const currentTasks = taskList.map(task => {
      return task;
    });
    if (inputText != "") {
      currentTasks.push(inputText);
    }
    setTaskList(currentTasks)
  }

  const deleteTask = (event) => {
    const currentTasks = taskList.map(task => {
      return task;
    });
    const deleteIndex = taskList.findIndex(element => element == event.target.value)
    if (deleteIndex != -1) {
      currentTasks.splice(deleteIndex, 1);
    }
    setTaskList(currentTasks);
  }

  useEffect(() => {
    setTaskList([])
  }, [reset])

  return (
    <div className="main">
      <AddBox updateText={updateText} addTask={addTask} trigger={taskList} />
      {(taskList || []).map((task, index) => {
        return <Task key={"task " + index} text={task} deleteTask={deleteTask} />
      })}
    </div>
  )
}

export default Main