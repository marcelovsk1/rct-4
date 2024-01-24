
import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/home'
import Market from '../pages/market'
import Gazelle from '../pages/gazelle'
import Spezial from '../pages/spezial'
import Samba from '../pages/campus'
import Campus from '../pages/campus'
import Wallet from '../pages/wallet'

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to ='/home'/>} />
    <Route path='/home' element={<Home />} />
    <Route path='/market' element={<Market />} />
    <Route path='/gazelle' element={<Gazelle />} />
    <Route path='/spezial' element={<Spezial />} />
    <Route path='/samba' element={<Samba />} />
    <Route path='/campus' element={<Campus />} />
    <Route path='/wallet' element={<Wallet />} />
  </Routes>
}

export default Routers
