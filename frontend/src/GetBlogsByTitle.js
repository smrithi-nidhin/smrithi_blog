import React from "react";
import Blog from './Blog';
import ProductstylingController from './ProductstylingController'
import { withRouter } from 'react-router';
import Comment from './features/comment';
import { Link } from 'react-router-dom';
class GetBlogsByTitle extends React.Component {


    state = {
        blogsObject: this.props.location.blogsObject
        //title:this.props.location.title
    }
    putComment() {
    

    }
    render() {

        return (
            <div className="container">
              
                <img src={this.state.blogsObject.imagePath} width="250px" height="250px"></img>
                <br></br>
                <b> Title : {this.state.blogsObject.title}</b>
                <br></br>
                <b>Description : {this.state.blogsObject.description}</b> 
                <b></b>

            </div>
        )
    }
}
export default withRouter(GetBlogsByTitle);