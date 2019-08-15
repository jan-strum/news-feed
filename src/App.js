import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { AllPosts } from './components/AllPosts'
import { FullPost } from './components/FullPost'

import './App.css'

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Redirect exact from='/' to='/posts' />
          <Route exact path='/posts' component={AllPosts} />
          <Route exact path='/posts/:id' component={FullPost} />
        </Switch>
      </Router>
    </div>
  )
}
