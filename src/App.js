import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Category from 'components/Category';
import SideBar from 'components/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    marginTop: '3rem',
  },
})

const categories = [
  'Brian',
  'Web Development',
  'Portfolio',
  'Interests'
];

function App() {
  const classes = useStyles();
  const [show, setShow] = useState(undefined);
  return (
    <div className={classes.root}>
      <SideBar/>
      <div>
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