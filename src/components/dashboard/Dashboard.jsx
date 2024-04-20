import { UserButton } from '@clerk/clerk-react'
import React from 'react'

function Dashboard() {
  return (
    <div>
        <h1>Welcome to Dashboard</h1>
        <UserButton />
    </div>
  )
}

export default Dashboard