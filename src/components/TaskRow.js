import React from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';

class TaskRow extends React.Component {

    deleteBtn = () => {
        // this.props.delete(this.props.task)
        alert(this.props.id)
        axios.delete('http://localhost:8080/tasks/' + this.props.id)
    }

    doneBtn = () => {
        axios.put('http://localhost:8080/tasks/' + this.props.id, {status: 'done'})
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.task} 
                </td>
                <button onClick={this.deleteBtn}>Delete</button>
                <button onClick={this.doneBtn}>Done</button>
            </tr>
        )
    }
}

export default TaskRow;
