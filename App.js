import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './Component/PostList';
import PostForm from './Component/PostForm';


class App extends Component {
  render() {
    return(
      <div className='App'>
     {/* <PostList /> */}
      <PostForm />
      
      </div>
    )
  }

}

export default App;
