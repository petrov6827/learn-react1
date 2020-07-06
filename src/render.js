import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { addPost, updateNewPostText } from './redux/state';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <Router>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </Router>,
    document.getElementById('root')
  );
};
