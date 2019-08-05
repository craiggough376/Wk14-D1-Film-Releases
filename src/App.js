import React, {Fragment} from 'react';
import Header from './components/Header.js'
import FilmBox from './containers/FilmBox.js'
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <FilmBox />
    </Fragment>
  );
}

export default App;
