import React, { useState } from 'react'
import axios from 'axios'
import User from '../components/User'
import InputField from '../components/InputField'
import { BASE_URL } from '../globals'

const Home = (props) => {
  const [currentUserId, setCurrentUserId] = useState('')
  const [usernameQuery, setUsernameQuery] = useState('')

  const getUser = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/users/${usernameQuery}`)
      setCurrentUserId(res)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (event) => {
    setUsernameQuery(event.target.value)
  }

  return (
    <div className="App">
      <main>
        <h2>Enter your username:</h2>
        <InputField
          function="username"
          onSubmit={getUser}
          value={usernameQuery}
          onChange={handleChange}
        />
        <User />
      </main>
    </div>
  )
}

export default Home
