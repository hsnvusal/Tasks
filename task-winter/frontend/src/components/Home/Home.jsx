import React from 'react'
import Arrival from '../pages/Arrival/Arrival'
import Fashion from '../pages/Fashion/Fashion'
import Shop from '../pages/Shop/Shop'
import Shipping from '../pages/Shipping/Shipping'
import Photos from '../pages/Photos/Photos'

const Home = () => {
  return (
    <div>
        <Fashion/>
        <Shop/>
        <Arrival/>
        <Shipping/>
        <Photos/>
    </div>
  )
}

export default Home