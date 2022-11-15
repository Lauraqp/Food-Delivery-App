import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const PrivateRouter = ({isAuthentication}) => {
  return (
    <div>
        {isAuthentication?<Navigate to="/"/>:<Outlet></Outlet>}
    </div>
  )
}

export default PrivateRouter