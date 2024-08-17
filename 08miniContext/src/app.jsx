import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

export function App() {
 

  return (
    <UserContextProvider>
    <h1>React with Chai</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}
