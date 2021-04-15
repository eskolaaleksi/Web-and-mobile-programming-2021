import React from 'react'

const Reminder = ({ reminders, deleteReminder }) => {
  return (
    <div>
      {new Date(reminders.timestamp).toLocaleString()} &nbsp;&nbsp; {reminders.name} <button onClick={deleteReminder}>Delete</button>
    </div>
  )
}

export default Reminder