import React, { useState, useEffect } from 'react'
import axios from 'axios'
import User from './User'
import InputField from '../components/InputField'
import { BASE_URL } from '../globals'

const Home = (props) => {
  const [usernameQuery, setUsernameQuery] = useState('')
  const [newUsernameQuery, setNewUsernameQuery] = useState('')

  const getUser = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/users/${usernameQuery}`)
      props.setCurrentUsername(res)
    } catch (err) {
      console.log(err)
    }
  }

  const postNewUser = async () => {
    try {
      const res = await axios
        .post(`${BASE_URL}/users/${newUsernameQuery}`, {
          userName: newUsernameQuery
        })
        .then(function (response) {
          console.log(response)
        })
      setUsernameQuery(newUsernameQuery)
      getUser()
    } catch (err) {
      console.log(err)
    }
  }

  const goToUser = () => {
    // props.history.push(`/api/users/${currentUsername}`)
  }

  const handleChange = (event) => {
    setUsernameQuery(event.target.value)
    setNewUsernameQuery(event.target.value)
  }

  useEffect(() => {
    goToUser()
  }, [props.currentUsername])

  return (
    <div className="home">
      <main>
        <h2>Enter your username:</h2>
        <InputField
          function="username"
          text="Submit"
          onSubmit={getUser}
          value={usernameQuery}
          onChange={handleChange}
        />
      </main>
      <section className="add-new-user">
        <h2>Enter a username to create an account:</h2>
        <InputField
          function="new username"
          text="Submit"
          onSubmit={postNewUser}
          value={newUsernameQuery}
          onChange={handleChange}
        />
      </section>
    </div>
  )
}

export default Home
