import React from 'react';
import { BololaLogo } from './Logo';
import { OutlinedInput, Button } from '@material-ui/core';

class Login extends React.Component {
    state={
        email: '',
        pwd: ''
    }
    handleChangeName = (e) => {
        const{name, value} = e.target;
        this.setState({[name]: value});
    }
    handleChangePwd = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }
    handleSubmit = (e) =>{
        
    }
    render(){
        return(
            <div className="center m-t-10">
                <div>
                    <BololaLogo />
                </div>
                <br />
                <div>
                    <form onSubmit={this.handleSubmit}>
                        {/* <label>Email: </label> */}
                        <OutlinedInput placeholder="Enter Email" value={this.state.name} onChange={this.handleChangeName} label="Email" />
                        <br/>
                        {/* <label>Password: </label> */}
                        <OutlinedInput className="m-t-10-px" placeholder="Enter Password" value={this.state.password} onChange={this.handleChangePwd} label="Password" />
                        {/* <input type='password' name='password' placeholders='password...' required onChange={this.handleChangePwd}/><br/> */}
                        {/* <button onSubmit={this.handleSubmit}>Log In</button> */}
                        <br/>
                        <Button variant="contained" className="m-t-10-px" color="primary">Log In</Button>
                    </form>
                </div> 
            </div>
        )
    }
}
export default Login