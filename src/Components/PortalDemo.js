import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
   var   d=document.getElementById('portal-root')
  return ReactDOM.createPortal (
    <h1>Portals PortalDemo</h1>,d
  )
}

export default PortalDemo