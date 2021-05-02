import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Blog from './Blog';
import { withRouter } from 'react-router';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import swal from 'sweetalert';
import BellIcon from 'react-bell-icon';
const baseUrl = "http://localhost:4000";
const AddblogSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too short!!')
    .max(15, 'Too long!!')
    .required('Required'),
  description: Yup.string()
    .min(2, 'Too short!!')
    .max(15, 'Too long!!')
    .required('Required')
});

class AddNewblog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      imagePath:"",
      image: null

    }
  }
  TitleChange = (event) => {
    this.setState({
      title: event.target.value
    })
  }
  PriceChange = (event) => {
    this.setState({
      description: event.target.value
    })
  }
  imageup(event) {
    this.setState({
      image: URL.createObjectURL(event.target.files[0])
    })
  }

  onSubmit = (event) => {
   
    event.preventDefault();
    let title = this.state.title;
    let description = this.state.description;
    let imagePath = this.state.imagePath;
    let image = this.state.image;

    Blog.addNewblog(title, description, image, imagePath)

      .then(response => {
        swal("Successfull!", response.data.message, "success");
       
        this.props.history.push("/");
      })
      .catch(error => {
       
      });
  }



  render() {


    return (
      <div className="CreateBlog">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/listAllBlogs" className="btn btn-outline-warning float-left">
                Show Blog List
              </Link>

            </div>

            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Blog</h1>
              <p className="lead text-center">
                Create new blog
              </p>

              <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input type='text' placeholder='Title ' name='title' className='form-control' value={this.state.title} onChange={this.TitleChange} />
                </div>
                <br />
                <div className='form-group'>
                  <input type='text' placeholder='Description' name='description' className='form-control' value={this.state.description} onChange={this.PriceChange} />
                </div>
                <p>Image Upload:</p>
                <p>
                  <input type='file' name='image' onChange={this.imageup.bind(this)} />
                  <img src={this.state.file} />
                </p>
                <button type="submit" className="btn btn-outline-warning btn-block mt-4" background-color=" #4CAF50" >Add Blog</button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddNewblog); 