const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
  
  let reminders =[
    {
        name: "Buy some eggs",
        timestamp: "2021-11-10T13:00:00.141Z",
        id: 1
    },
    {
        name: "Make an omelette",
        timestamp: "2021-11-11T08:00:00.141Z",
        id: 2
    },
    {
        name: "Wash dishes",
        timestamp: "2021-11-11T09:00:00.000Z",
        id: 3
    },
    {
        name: "Buy more eggs",
        timestamp: "2021-11-11T13:00:00.000Z",
        id: 4
    }
  ]
  
  /*
  app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })
*/
  app.get('/api/reminders', (request, response) => {
    response.json(reminders)
  })

  app.post('/api/reminders', (request, response) => {
    const body = request.body
  
    if (body.name === undefined) {
        return response.status(400).json({error: 'task is missing'})
    }
    if (reminders.find(reminder => reminder.name === body.name)) {
      return response.status(400).json({error: 'name must be unique'})
    }
  
    const reminder = {
      name: body.name,
      timestamp: new Date(),
      id: Math.floor(Math.random() * 10**10)
    }
    if (reminder.timestamp === undefined) {
        return response.status(400).json({error: 'timestamp is missing'})
    }
  
    reminders = reminders.concat(reminder)
  
    response.json(reminder)
  })
  
  app.get('/api/reminders/:id', (request, response) => {
    const id = Number(request.params.id)
    const reminder = reminders.find(reminder => reminder.id === id)
  
    if ( reminder ) {
      response.json(reminder)
    } else {
      response.status(404).end()
    }
  })

  app.delete('/api/reminders/:id', (request, response) => {
    const id = Number(request.params.id)
    reminders = reminders.filter(reminder => reminder.id !== id)
  
    response.status(204).end()
  })
  
  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })