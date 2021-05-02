import React, { Component } from "react";
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button';
import axios from 'axios';

class editBlog extends Component {

  constructor(props) {
    super(props)

    this.TitleChange = this.TitleChange.bind(this);
    this.DescriptionChange = this.DescriptionChange.bind(this);
   
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      title: '',
      description: '',
      
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/blogs/editBlog/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          title: res.data.title,
          description: res.data.description,
          
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

 TitleChange(e) {
    this.setState({ title: e.target.value })
  }

  DescriptionChange(e) {
    this.setState({ description: e.target.value })
  }

  

  onSubmit(e) {
    e.preventDefault()

    const blogsObject = {
      title: this.state.title,
      description: this.state.description,
     
    };

    axios.put('http://localhost:4000/blogs/updateBlog/' + this.props.match.params.id, blogsObject)
      .then((res) => {
        console.log(res.data)
        console.log('successfully updated')
      }).catch((error) => {
        console.log(error)
      })

   
    this.props.history.push('/listAllBlogs')
  }


  render() {
    return (
        <div>
    <form onSubmit={this.onSubmit}>
        <div className='form-group'>
          <input type='text' placeholder='Title ' name='title' className='form-control' value={this.state.title} onChange={this.TitleChange} />
        </div>
        <br />
        <div className='form-group'>
          <input type='text' placeholder='Description' name='description' className='form-control' value={this.state.description} onChange={this.DescriptionChange} />
        </div>
        
        <button type="submit" >
          Update Blog
        </button>
      </form>
      </div>
      );
  }
}
export default editBlog;