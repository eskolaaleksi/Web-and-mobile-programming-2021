import React from 'react'

const Phonebook = ({ phonebook }) => {
    return (
        <div>
            <Header header={phonebook.name}/>
            <div>
                {phonebook.contacts.map(contact => 
                    <Contacts key={contact.id} contact={contact} />
                )}
            </div>
            <br />
            <div>Total number of entries : {phonebook.contacts.length}</div>
        </div>
    )
}

const Header = ({ header }) => {
    return (
        <div>
            <h1>{ header }</h1>
        </div>
    )
}

const Contacts = ({ contact }) => {
    return (
        <div>
            Name: {contact.name} <span style={tab}>Number: {contact.phonenumber}</span>
        </div>
    )
}

const tab = {
    position: 'absolute',
    left: '200px'
};
  

export default Phonebook