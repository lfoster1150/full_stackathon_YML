import React, { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import User from './pages/User'
import { Route, Switch } from 'react-router-dom'
import TaskList from './components/TaskList'

function App() {
  const [currentUsername, setCurrentUsername] = useState('')
  return (
    <div className="App">
      <header>
        <h1> Task Manager</h1>
      </header>
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => (
            <Home
              {...props}
              currentUsername={currentUsername}
              setCurrentUsername={setCurrentUsername}
            />
          )}
        />
        <Route
          path="/users"
          component={(props) => (
            <User {...props} currentUsername={currentUsername} />
          )}
        />
        {/* <Route
          path="/users/:userName/taskLists/:taskListId"
          component={TaskList}
        /> */}
      </Switch>
    </div>
  )
}

export default App
