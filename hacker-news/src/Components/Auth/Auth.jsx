import React,{Component} from 'react';
import '../Auth/Auth.css'

class Auth extends Component{
    state ={
        username:null
    }
    render() {
        
         const{children, user} = this.props
        
        return (
            user? children:

            <form onSubmit = {this.handleSubmit}>
                <label htmlFor='username'></label>
                <input id ='username' type = 'text' onChange = {this.handleChange}></input>
                <button class ="login">Login</button>
            </form>
        )
    }
    handleChange = (event) => {
this.setState ({
    username:event.target.value
})
    }
    handleSubmit = (event) => {
event.preventDefault()
this.props.login(this.state.username)

    }
}
export default Auth;