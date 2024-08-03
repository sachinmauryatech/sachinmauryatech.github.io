
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Delete from './components/Delete.jsx'
import Edit from './components/Edit.jsx'
import Update from './components/Update.jsx'
import View from './components/View.jsx'
import Create from './components/Create.jsx'
import Home from './components/Home.jsx'

import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import { Route, Routes } from 'react-router-dom'
import PostEdit from './components/PostEdit.jsx'
import "bootstrap/dist/css/bootstrap.min.css"

import "bootstrap/dist/js/bootstrap.bundle.min.js"
import DeleteData from './components/DeleteData.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="/create" element={<Create/>} ></Route>
        <Route path="/view" element={<View />}></Route>
        <Route path="/update" element={<Update/>}></Route>
        <Route path="/edit/:id" element={<Edit/>}></Route>
        <Route path="/delete" element={<Delete/>}></Route>
        <Route path="/deleteData/:id" element={<DeleteData/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
