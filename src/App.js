import React from 'react';
import Navbar from './components/navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import {Container} from '@material-ui/core'
import './App.css';
import Store from './store/store'
import Routes from './routes'

function App() {
  return (
    <div className="App">
              {/* <Router> */}
      <Store>
          <Router>
          <Navbar/>
          <Container fixed >
          <Routes/>
          </Container>
          </Router>
      </Store>
      {/* </Router> */}

    </div>
  );
}

export default App;
