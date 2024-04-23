import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import Starter from '../UI/Dashboard/Starter'
import FullLayout from '../UI/Dashboard/FullLayout';

function Dashboard() {
  return (
    <div>
        <FullLayout />
        <Starter />
    </div>
  )
}

export default Dashboard