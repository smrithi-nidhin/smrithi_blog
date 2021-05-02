import React from 'react';
import swal from 'sweetalert';
import Blog from './Blog';
import {withRouter} from 'react-router';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import* as Yup from 'yup';

const RegisterSchema= Yup.object().shape({
    username: Yup.string()
    .min(2,'Too short!!')
    .max(15,'Too long!!')
    .required('Required'),
    password: Yup.string()
    .min(2,'Too short!!')
    .max(15,'Too long!!')
    .required('Required')
    });
class Register extends React.Component {
    state = {
        accountno: "",
        username: "",
        password: "",
        confirmPassword: ""
    }
    UsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    PasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    confirmPasswordChange = (event) => {
        this.setState({
            confirmPassword: event.target.value
        })
    }
    accountnoChange = (event) => {
        this.setState({
            accountno: event.target.value
        })
    }
    

    onSubmit = (event) => {
        event.preventDefault();
        let username = this.state.username;
        let password = this.state.password;
        let confirmPassword = this.state.confirmPassword;
        let accountno = this.state.accountno;

        Blog.registration(username,password,confirmPassword,accountno)
       .then(response=>{
        swal("Registration successfull!",response.data.message, "success");
        this.props.history.push("/");
    })
    .catch(error=>{
        swal("Registration failed!!",error.response.data.message , "error");
    });


    
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="col-2"></div>
                        <h1>Sign Up</h1>

                    </div>

                </div>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <form onSubmit={this.onSubmit}>
                            <div className="jumbotron">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Username</label>
                                    <input type="text" value={this.state.username} onChange={this.UsernameChange} className="form-control" id="uname" aria-describedby="emailHelp" />
                                    {/* <small id="emailHelp" className="form-text text-muted">Enter mail-id or contact number</small> */}
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" value={this.state.password} onChange={this.PasswordChange} className="form-control" id="pwd" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1"> Confirm Password</label>
                                    <input type="password" value={this.state.confirmPassword} onChange={this.confirmPasswordChange} className="form-control" id="confirmpwd" />
                                </div>
                                                  <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                            
                            </form>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>

        );
    }
}
export default withRouter(Register) ; 