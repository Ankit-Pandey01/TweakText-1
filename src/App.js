import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const [btntext,setBtnText]= useState('Enable Dark Mode')
  const [alert, setAlert] = useState(null);

  const  showAlert = (message, type) =>{
         setAlert({
          msg: message,
          type: type
         })
         setTimeout ( () => {
           setAlert(null);
         }, 1500);
  }

  const toggleMode = () => {
      if(mode === 'light')    
      {
          setMode('dark'); 
          document.body.style.backgroundColor = '#042743';
          setBtnText('Disable Dark Mode') 
          showAlert("Dark mode has been enabled","success");
      }     
      else
      {
          setMode('light');
          document.body.style.backgroundColor = 'white';
          setBtnText('Enable Dark Mode')
          showAlert("Light mode has been enabled","success");
      }
  };
//   return (
//     <>
//  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btntext={btntext} />
//  <Alert alert={alert}/>
//  <div className="container my-3">
//  </div>
//     </>
//   );
// }
return (
  <>

  <Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btntext={btntext} />
  <Alert alert={alert}/>
  <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About />} />  {/* Correct */}
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to analyze below" mode={mode} />} />  {/* Correct */}
      </Routes>
   </div>
  </Router>

  </>
);
}

export default App;
