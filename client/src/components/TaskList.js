import React, {useState, useEffect} from 'react'
import Tasks from './Tasks'
import Input from './Input'

const TaskList = (props) => {
  //state pass down//
const  [tasks, handleTasks] = useState([])

const [input,setInput] = useState('')

const [list,setlist] = useState({})


const addTask = ()=>{
  //axios(post) call to create new task with the input, axios call(update) the tasklist with a new task
 let myNewList = [...tasks,input]
  (myNewList)
}

const removeTask = (index) =>{
  //update task list and then delete
  let myNewList = [...tasks]
  myNewList.splice(index,1)
  handleTasks(myNewList)
}
const handleChange = (event) =>{
 setInput(event.target.value)
}

useEffect(()=>{
//send axios call that gets task list by id from database
//make function that send the anx call that send request to get a list and set state of list to it.
//set state of task to that array so we can see all of them
},[])

  return (
    <div className="list">
      <Input handleChange={handleChange} addTask={addTask}/>
      <Tasks tasks={tasks} removeTask={removeTask} />
    </div>
  )
}

export default TaskList