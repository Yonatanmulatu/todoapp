import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import AddTaskForm from './components/AddTaskForm';
import TaskRow from './components/TaskRow';
// import { Router, Link, Route} from 'react-router-dom';
import axios from 'axios';
import RegisterationForm from './components/RegisterationForm';

class App extends React.Component {

  state = {
    name: '',
    status: '',
    addTask: '',
    tasks: []
  };

  InputChangeHandle = (e) => {

    this.setState({
      addTask:{
        name: e.target.value,
        status: 'pending'
      }
    })
  }

  componentDidMount() {
    axios('http://localhost:8080/tasks')
    .then(res => {
      this.tasks = res.data;
      let tasks = res.data;
      this.setState({
        tasks: tasks
      })
    })
  }

  // addTask = newTask => {
  //   this.setState({
  //     newTask: [this.state.showCards, newTask]
  //   })
  // }

  checkout = () => {
      axios.post('http://localhost:8080/tasks', {
        task: this.state.task,
      })
  }

  existingTasks() {
  }

  addTask = (e) => {
    axios.post('http://localhost:8080/tasks/', this.state.addTask)
    
    e.preventDefault();
    const pendingTask = this.state.addTask;
    if(this.state.addTask.name!==""){
      const newTask=[...this.state.tasks, pendingTask];
      console.log(newTask)
      this.setState({
        tasks: newTask
      })
    }
  }
  // deleteBtn = (taskName) => {
  //   let
    
  // }
  render() {
    // let existingTasks = this.state.tasks.map((task) => {
    //   console.log(task)
    //   return <TaskRow task={task}/>
    // })
    let doneTasks = this.state.tasks.filter((task) => {
      return(task.status === 'done')
    })

    let pendingTasks = this.state.tasks.filter((task) => {
      return(task.status === 'pending')
    })
    console.log(pendingTasks)
    console.log(doneTasks)
    return (
      <div className="App">
        <header className="App-header">
          <RegisterationForm 
          />
        <hr id="hr1"/>
          <form id="toDoForm" onSubmit={this.addTask}>
            <input type="text" placeholder="Add Task" value={this.state.addTask.name} onChange={this.InputChangeHandle}/>
            <button type="Submit" id="submitBtn">+ ADD</button>
          </form>
          <table>
            <tr>
              <th>Pending</th>
            </tr>
            {
              pendingTasks.map((task) => {
                return <TaskRow task={task.name} delete={this.deleteBtn} id={task._id}/>
              })
            }
          </table>
          <table>
            <tr>
              <th>Done</th>
            </tr>
            {
              doneTasks.map((task) => {
                return <TaskRow task={task.name}/>
              })
            }
          </table>
          <hr id="hr2"/>
        </header>
        <div>
        </div>
      </div>
    );
  }
}

export default App;
