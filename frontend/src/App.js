import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import AddNewblog from './AddNewblog';
import ListAllBlogs from './ListAllBlogs';
import GetBlogsByTitle from './GetBlogsByTitle';
import Register from './Register';
import Comment from './features/comment'
import Navbar from './Navbar';
import editBlog from './editBlog';

import './navbar.css';
import './Login.css'
import './style.css'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (

      <BrowserRouter>
        <div className="App">
       
          <Switch>
            <Route path="/login" exact={true}>
              <Login />
            </Route>
          
            <Route path="/addnewblog" exact={true} >
              <AddNewblog />
            </Route>
            <Route path="/listAllBlogs" exact={true} >
              <ListAllBlogs />
            </Route>
            <Route path="/getBlogsByTitle" exact={true} >
              <GetBlogsByTitle />
            </Route>
                       
            <Route path="/register" exact={true} >
              <Register />
            </Route>
            <Route path="/" exact={true} >
              <Navbar />
            </Route>
            <Route path="/comment" exact={true} >
              <Comment />
            </Route>
          </Switch>


        </div>
      </BrowserRouter>

      //</div>
    );
  }
}

export default App;
