import React, { useState } from 'react';
import swal from 'sweetalert';
import Blog from './Blog';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import BellIcon from 'react-bell-icon';

import ProductstylingController from './ProductstylingController'

class Navbar extends React.Component {
    state = {

        blogs: [],
    }
    componentDidMount() {
        Blog.getAllBlogs()
            .then(data => {
                this.setState({
                    blogs: data.data.blogs
                });
            });
        
    }
    
    render() {
        return (
        <div>
        <div  style={{backgroundColor:"#662200",height:"200px",marginBottom:"50px"}}>
            
            
                
            <div class="navbar" style={{backgroundColor:"#662200"}} >
                
    <a href="#"  >endplan</a>
   
    <a href="#" style={{paddingLeft:"280px"}} >Why Endplan</a>
    <a href="#">Security</a>
    <a href="#">FAQ</a>
    <a href="#">Blog</a>
    <a href="/addnewblog">Create Blog</a>
    <a href="/login" >Sign In</a>
    <a href="/register" class="active">Sign Up</a>
    </div>
 
 
  <div  style={{backgroundColor:"#662200"}}>
   
       
      
            <h1 style={{color: "#ff704d",fontSize: "50px"}}>Endplan Blog</h1>
            <p style={{color: "#FFFFFF",fontSize: "15px"}}>News,articles, and insightful stories dedicated to  prepare you for the end.</p>
            
            </div>
            </div>
            <div className="info-section">
           <div class="row">
            
            {
                    this.state.blogs.map(blog =>
                       
                        
                        <div class="column">
                            <ProductstylingController
                            blogsObject={blog}
                            
                             title={blog.title} 
                             description={blog.description} 
                             imagePath={blog.imagePath} />
                            
                            
                            </div> 
                            

                    )}
                    
                   </div>
                    </div>
        
        </div>
      
   

   

 



        
        );
    }
}
export default Navbar;