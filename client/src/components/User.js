import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'

const User = (props) => {
  const [taskLists, setTaskLists] = useState([])
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
  useEffect(() => {
    getTaskLists()
  }, [])
  return (
    <div className="user-container">
      <div>USER COMPONENT</div>
    </div>
  )
}

export default User
