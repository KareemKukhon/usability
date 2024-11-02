import React from 'react'

export default function 
ContactInfo({title, Icon}) {
  return (
    <div style={{display: 'flex', gap: "20px", alignItems: 'center'}}>
      <Icon color={"secondary"} />
      <p style={{fontSize: "18px"}}>{title}</p>
    </div>
  )
}
