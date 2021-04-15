import React from 'react'
import Reminder from './components/Reminder'
import ReminderForm from './components/ReminderForm'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reminders: [],
      newName: '',
      newDate: ''
    }
  }

  componentDidMount() {
		axios
			.get('http://localhost:3001/api/reminders')
			.then(response => {
				this.setState({ reminders: response.data})
			})
	}

  addReminder = (event) => {
    event.preventDefault()
    if (isNaN(new Date(this.state.newDate).getTime())) { 
      alert("Invalid date!")
    } else if(this.state.reminders.some((reminder)=>this.state.newName===reminder.name)){
			alert(this.state.newName + " already exists")
		} else {
    const reminderObject = {
      name: this.state.newName,
      timestamp: new Date(this.state.newDate)
    }
    axios
      .post('http://localhost:3001/api/reminders', reminderObject)
      .then(response => {
        this.setState({
          reminders: this.state.reminders.concat(response.data),
          newName: '',
          newDate: ''
        })
      })
    }
  }

  deleteReminder = (id) => {
		return () => {
      if(window.confirm("Do you really want to delete this?")) {
        axios
          .delete(`http://localhost:3001/api/reminders/${id}`)
          .then(response => {
            this.setState({
              reminders: this.state.reminders.filter(reminder => id !== reminder.id)
            })
          })
      }
    }
  }

  handleNameChange = (event) => { this.setState({ newName: event.target.value }) }

  handleDateChange = (event) => { this.setState({ newDate: event.target.value }) }

  render() {
    return (
      <div>
        <h2>Reminders</h2>
        <ReminderForm 
          onSubmit={this.addReminder}
          nameValue={this.state.newName}
          nameOnChange={this.handleNameChange}
          dateValue={this.state.newDate}
          dateOnChange={this.handleDateChange}
        />
        <h2>At time:</h2>
        <ul>
          {this.state.reminders.map((remind, i) => 
            <Reminder key={i} reminders={remind} deleteReminder={this.deleteReminder(remind.id)} />
          )}
        </ul>
      </div>
    )
  }
}

export default App