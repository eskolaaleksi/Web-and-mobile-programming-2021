import React from 'react'

const ReminderForm = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <div>
                Name: &nbsp;
                <input
                    value={props.nameValue}
                    onChange={props.nameOnChange}
                />
            </div>
            <div>
                Date: &nbsp;&nbsp;&nbsp;
                <input
                    value={props.dateValue}
                    onChange={props.dateOnChange}
                />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default ReminderForm