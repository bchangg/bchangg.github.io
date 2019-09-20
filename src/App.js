import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Category from 'components/Category';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    height: '100vh',
    alignItems: 'center'
  }
})

const categories = [
  'Brian',
  'Sales',
  'Web Development',
  'Portfolio',
  'Contact'
];

function App() {
  const classes = useStyles();
  const [show, setShow] = useState(undefined);
  return (
    <div className={classes.root}>
      {categories.map((category, index) => {
        return (
          <Category key={index} show={show} setShow={setShow} name={category}/>
        );
      })}
    </div>
  );
}

export default App;
// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   Learn React
// </header>