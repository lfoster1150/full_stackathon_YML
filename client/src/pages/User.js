import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'
import InputField from '../components/InputField'

const User = (props) => {
  const [taskLists, setTaskLists] = useState([])
  const [listNameInput, setListNameInput] = useState([])
  const [taskListUpdated, setTaskListUpdated] = useState([false])
  const [selectedTaskList, setSelectedTaskList] = useState('')

  const testTaskLists = [
    { listName: 'Vaccuum' },
    { listName: 'Sweep and Mop' },
    { listName: 'Get groceries' }
  ]

  const getTaskLists = async () => {
    console.log(props)
    try {
      const res = await axios.get(
        `${BASE_URL}/users/${props.match.params.userName}/taskLists`
      )
      setTaskLists(res.data.results)
    } catch (err) {
      console.log(err)
    }
  }

  const goToTaskList = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/users/${props.currentUsername}/${selectedTaskList}`
      )
    } catch (err) {
      console.log(err)
    }
  }

  const testClick = (e) => {
    // console.log(e)
  }

  const handleChange = (event) => {
    setListNameInput(event.target.value)
  }

  const handleClickedTaskList = (e) => {
    setSelectedTaskList(e)
    goToTaskList(selectedTaskList)
  }

  const createNewList = (e) => {
    e.preventDefault()
    setTaskListUpdated(true)
  }

  useEffect(() => {
    if (taskListUpdated) {
      let updatedTaskList = taskLists
      updatedTaskList.push({ listName: listNameInput })
      setTaskLists(updatedTaskList)
      setTaskListUpdated(false)
    }
  }, [taskListUpdated])
  useEffect(() => {
    // setTaskLists(testTaskLists)
    getTaskLists()
  }, [])

  return (
    <div className="user-container">
      <p>Welcome {}</p>
      <h2>Please select a list below, or create a new list:</h2>
      <div className="list-container">
        {taskLists ? (
          taskLists.map((list) => (
            <div className="list-name" onClick={handleClickedTaskList}>
              <h2>{list.listName}</h2>
            </div>
          ))
        ) : (
          <h2>NO LISTS</h2>
        )}
      </div>
      <InputField
        function="Add Task"
        text="+"
        onSubmit={createNewList}
        value={listNameInput}
        onChange={handleChange}
      />
    </div>
  )
}

export default User
