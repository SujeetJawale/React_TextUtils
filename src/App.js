import React,{ useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar.js'
import Textbox from './Components/Textbox';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () =>{
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert(" Light Mode Enabled", "success")
    }else{
      setMode('dark')
      document.body.style.backgroundColor = '#124272'
      showAlert(" Dark Mode Enabled", "success")
    }
  }

  const showAlert = (message, type) =>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null)
      }, 1500)
  } 

   return (
    <>
    {/* <Router> */}
    <Navbar title = "Text Utils App" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert ={alert}/>
    <div className='container my-3'>
    {/* <Routes> */}
          {/* <Route path="/about" element = {<About />}> </Route>
          <Route path="/" element = { */}
          <Textbox title = "Enter Text Here" mode={mode} showAlert ={showAlert}/>
          {/* </Route> */}
    {/* </Routes>  */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;

// Add one by opne all the components in this react file 
// and do the imports for the same
// Can pass props as shown above "title"