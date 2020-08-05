import React from 'react';
import { render } from '@testing-library/react';


class AddTaskForm extends React.Component {

    tasks = this.props.tasks;
    addNewTask = this.tasks.map(task => {
        return <div className="list" task="task.name">
            <p>{task.name}</p>
        </div>
    })

    render() {
        return(
            <div>{this.addNewTask}</div>
        )
    }
}

export default AddTaskForm;

