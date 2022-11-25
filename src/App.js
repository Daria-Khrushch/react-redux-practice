import React from 'react';
import Likes from './components/Likes';
import Title from './components/Title'
import store from './redux/store'
import './App.css';
import Comments from './components/Comments';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing" />
            <Title />
            <Likes store={store} />
          </div>
           <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
