import React, {useState} from 'react';
import { login } from "./GlobalFunctions.js";

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      error: '',
      isLogin: false,
      token: '',
    }
    this.letLogin = this.letLogin.bind(this)
    this.updateValue = this.updateValue.bind(this)
  }
  updateValue(e) {
    this.setState({email : e.target.value})
  }
  letLogin(e) {
    const user = {
      email: this.state.email,
      password: this.state.password,
    }
    let startLogin = true;
    this.setState({emailError : ''})
    this.setState({passwordError : ''})
    this.setState({error : ''})
    if(this.state.email == '') {
      this.setState({emailError : 'Email cannot empty'})
      startLogin = false
    }
    if(this.state.password == '') {
      this.setState({passwordError : 'Password cannot empty'})
      startLogin = false
    }
    if(startLogin) {
      
      login(user).then( msg => {
        if(msg.error){
          this.setState({error : msg.error})
        }
        else if(msg.data.error) {
          this.setState({error : msg.data.error})
        }
        else {
          this.setState({isLogin : true})
          this.setState({token : msg.data.token})
          localStorage.setItem('token', msg.data.token)
          this.props.history.push({pathname:'/', state: {isLogin: this.state.isLogin}})
        }
      })
      /*
     this.setState({isLogin : true})
     this.props.history.push({pathname:'/', state: {isLogin: this.state.isLogin}})
     */
    }
  }
  render() {
    return (
      <div className="d-flex flex-row border">
        <div className="col-5">
          <h3>Please Login</h3>
          <div className="form-group">
            <label for="email">Email address:</label>
            <input type="email" className="form-control" placeholder="Enter email" id="email" onChange={(e) => this.setState({email: e.target.value})}/>
            <LoginValidation error={this.state.emailError}></LoginValidation>
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password" className="form-control" placeholder="Password" id="password" onChange={(e) => this.setState({password: e.target.value})} />
            <LoginValidation error={this.state.passwordError}></LoginValidation>
          </div>
          <button type="submit" className="btn btn-dark" onClick={this.letLogin}>Submit</button>
          <div className="form-group">
            <LoginValidation error={this.state.error}></LoginValidation>
          </div>
        </div>
      </div>
    );
  }
}

const LoginValidation = (props) => {
  return (
    <div className={`text-white ${props.error ? 'p-2 bg-danger':''}`}>
      {props.error}
    </div>
  );
}

export default Login;