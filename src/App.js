import React, { useState } from 'react';
import Category from 'components/Category';
import SideBar from 'components/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'App.scss';

const categories = [
  'Brian',
  'Web Development',
  'Portfolio',
  'Interests'
];

function App() {
  const [show, setShow] = useState(undefined);
  return (
    <div id="app">
      <SideBar/>
      <div className="categories">
        {categories.map((category, index) => {
          return (
            <Category key={index} show={show} setShow={setShow} name={category}/>
          );
        })}
      </div>
    </div>
  );
}

export default App;