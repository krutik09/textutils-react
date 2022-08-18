import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  const [darkmode, setdarkmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showslert = (msg, type) => { 
    setalert({
      msg: msg,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  const togglemode = () => { 
    if (darkmode === 'light') {
      setdarkmode('dark')
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';
      showslert("dark mode ennabled", "success");
    }
    else { 
      setdarkmode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      // showslert("light mode ennabled","warning")
    }
  }
  return (
    <div className="App">
      
     
      {/* <Textform heading="Enter text" showslert={showslert}/> */}
      <BrowserRouter>
      <Navbar mode={darkmode} togglemode={togglemode} name="TextUtils"></Navbar>
      <Alert alert={ alert}/>
      <Routes>
      <Route exact path='/' element={<Textform/>}>  </Route>
      <Route exact path='/About' element={<About/>}></Route>
      </Routes>
      </BrowserRouter>
     
      {/* <div className="container"> */}
        {/* <Textform heading="Enter about you" showslert={showslert} /> 
        <About/> */}
      </div>
    // </div>
  );
}

export default App;
