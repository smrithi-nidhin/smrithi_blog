import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BellIcon from 'react-bell-icon';
import Blog from './Blog';
import {Button} from 'react-bootstrap';
import ProductstylingController from './ProductstylingController'
class ListAllBlogs extends React.Component {


    state = {
isEditing:false,
        blogs: [],
        editMode :false
    }
    toggleEditing = () =>{
        this.setState({

            isEditing:!this.state.isEditing
        })
    }
    componentDidMount() {
        Blog.getAllBlogs()
            .then(data => {
                this.setState({
                    blogs: data.data.blogs
                });
            });
    }  
    editBlogSubmitHandler = event => {      
       event.preventDefault();      
    }
    Update = id =>{
        console.log(id);  
        let updatedBlogs = [...this.state.blogs].filter(i => i.id !== id);
        this.setState({blogs: updatedBlogs});     
    }
    render() {
const { blog } =this.props;
if(this.state.isEditing){
    return <li>
        <form onSubmit={this.editBlogSubmitHandler}>
        {
                    this.state.blogs.map(blog =>
                 <div>            
<div className="CreateBlog">
<div className="container">
  <div className="row">
    <div className="col-md-8 m-auto">
      <h1 className="display-6 text-center"> Edit Blog</h1>    
     
        <div className='form-group'>
          <input type='text' placeholder='Title ' name='title' className='form-control' defaultValue={blog.title} />
        </div>
        <br />
        <div className='form-group'>
          <input type='text' placeholder='Description' name='description' className='form-control' defaultValue={blog.description} />
        </div>
        <p>Image Upload:</p>
        <p>
          <input type='file' name='image'  />
          <img src={this.state.file} />
        </p>
        <button type="submit" onClick={()=>this.Update(blog._id)} className="btn btn-outline-warning btn-block mt-4" background-color=" #4CAF50" >Update Blog</button>
        <button onClick={this.toggleEditing}>Cancel</button>
    </div>
  </div>
</div>
</div>
            </div> 
                    )}
        </form>
    </li>
}
        return (

            <div className="container">
                <div className="coloumn">

        <h1>Blog List</h1>
        </div>
                <div className="row" >

                {
                    this.state.blogs.map(blog =>
                      
                     
                        <div>
                            <ProductstylingController  blogsObject={blog} title={blog.title} description={blog.description} imagePath={blog.imagePath} />
                            {/* <Link to={`/edit/${this.state.blog._id}`} class="btn btn-success">Edit</Link>&nbsp; */}
                        <button variant="info"  onClick={this.toggleEditing}>Edit</button>
                        </div>
                        
                    )}
                    </div>
                   
                    <br></br>
                  <div> <button id="back" >< Link to="/">Back</ Link></button></div> 
            </div>




        );
    }
}



export default ListAllBlogs;
