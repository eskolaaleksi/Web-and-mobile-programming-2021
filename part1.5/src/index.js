import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const phonebookapp = {
        title: 'Half Stack -sovelluskehitys',
        contacts: [
          {
            name: 'John Doe',
            phonenumber: '358401234567'
          },
          {
            name: 'Jane Doe',
            phonenumber: '44551234567'
          },
          {
            name: 'Foo bar',
            phonenumber: '0000'
          }
        ]
      }

  return (
    <div>
        <Header phonebookapp={phonebookapp} />
        <Contents contacts={phonebookapp}/>
    </div>
  )
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.phonebookapp.title}</h1>
        </div>
    )
}

const Contents = (props) => {
    return (
        <div>
            <Contact contact={props.contacts.contacts[0].name} phonenumber={props.contacts.contacts[0].phonenumber}/>
            <Contact contact={props.contacts.contacts[1].name} phonenumber={props.contacts.contacts[1].phonenumber}/>
            <Contact contact={props.contacts.contacts[2].name} phonenumber={props.contacts.contacts[2].phonenumber}/>
        </div>
    )
}

const Contact = (props) => {
    return (
        <div>
            <p>{props.contact} {props.phonenumber}</p>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)