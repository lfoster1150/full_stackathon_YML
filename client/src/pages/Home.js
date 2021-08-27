import React, { useState, useEffect } from 'react'
import axios from 'axios'
import User from './User'
import InputField from '../components/InputField'
import { BASE_URL } from '../globals'

const Home = (props) => {
  const [usernameQuery, setUsernameQuery] = useState('')
  const [newUsernameQuery, setNewUsernameQuery] = useState('')

  const sendToUserPage = () => {
    console.log(props.currentUsername)
    props.history.push(`/users/${usernameQuery}`)
  }

  const getUser = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.get(`${BASE_URL}/users/${usernameQuery}`)
      console.log(res)
      props.setCurrentUsername(usernameQuery)
      sendToUserPage()
    } catch (err) {
      console.log(err)
    }
  }

  const postNewUser = async (e) => {
    e.preventDefault()
    try {
      const res = await axios
        .post(`${BASE_URL}/users`, {
          userName: newUsernameQuery
        })
        .then(function (response) {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
      setUsernameQuery(newUsernameQuery)
    } catch (err) {
      console.log(err)
    }
  }

  const goToUser = () => {
    // props.history.push(`/api/users/${currentUsername}`)
  }

  const handleChange = (event) => {
    setUsernameQuery(event.target.value)
  }

  const handleChangeNew = (event) => {
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
          text="Sumbit"
          onSubmit={getUser}
          value={usernameQuery}
          onChange={handleChange}
        />
      </main>
      <section className="add-new-user">
        <h2>Enter a username to create an account:</h2>
        <InputField
          function="new username"
          text="Sumbit"
          onSubmit={postNewUser}
          value={newUsernameQuery}
          onChange={handleChangeNew}
        />
      </section>
    </div>
  )
}

export default Home
