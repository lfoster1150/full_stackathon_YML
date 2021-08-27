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
    { listName: 'Monday Task List' },
    { listName: 'Tuesday Task List' },
    { listName: 'Wed Task List' },
    { listName: 'Thurs Task List' },
    { listName: 'Fri Task List' }
  ]

  const getTaskLists = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/users/${props.currentUserId}/task_lists`
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
    setTaskLists(testTaskLists)
    // getTaskLists()
  }, [])

  return (
    <div className="user-container">
      <p></p>
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
        function="New List"
        onSubmit={createNewList}
        value={listNameInput}
        onChange={handleChange}
      />
    </div>
  )
}

export default User
