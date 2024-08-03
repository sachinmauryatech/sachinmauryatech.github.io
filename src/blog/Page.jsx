import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Page() {
  return (
    <ul>
        <li><button><Link to="apple">apple</Link></button></li>
        <li><button><Link to="mi">mi</Link></button></li>
        <li><button><Link to="oppo">oppo</Link></button></li>
        <li><button><Link to="samsung">samsung</Link></button></li>
        <Outlet/>
    </ul>
  )
}

export default Page