import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import BusSheet from '../../components/BusSheet'
import Station from '../../components/Station'

export default function index() {
    return (
      <div>
      <h1>
        <Navbar
        nav1="기숙사"
        nav2="버스" />
      </h1>
      <div>

      </div>
        <BusSheet />
        <Station />
      </div>
    )
  }
  