import React from 'react';
import { register } from '../serviceWorker';
import { render } from '@testing-library/react';


class RegisterationForm extends React.Component {

    state = {
        username: '',
        password:'',
        confirmPassword:'',
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register = () => {
        let error = false;
        if(this.state.username.trim() === '' || this.state.password.trim() === '' || this.state.confirmPassword.trim() ==='') {
            error = true;
        }
        if(this.state.password !== this.state.confirmPassword) {
            error = true;
        }
        if(error) {
            alert('register');
        } else {
            alert("there is an error")
        }
    }
    
    render() {
        return(
            <div>
                Username: <input type='text' onChange={this.inputChangeHandler} value={this.state.name} name='username'/>
                Password: <input type='password' onChange={this.inputChangeHandler} value={this.state.name} name='password'/>
                Confirm Password: <input type='password' onChange={this.inputChangeHandler} value={this.state.name} name='confirmPassword'/>
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}

export default RegisterationForm;