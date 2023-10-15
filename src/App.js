import React, { useState } from 'react';

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  const containerStyle = {
      backgroundColor : "lightBlue",
      padding: "20px",
      color : " black"
  }
  
  const containerStyleDark = {
      backgroundColor : "black",
      padding: "20px",
      color : "white"
  }


  const toggleStyle = {
    backgroundColor: "white",
    color: "black",
    padding: "5px",
    borderColor : "black"
  }
  const toggleStyleDark = {
    backgroundColor: "black",
    color: "white",
    padding: "5px",
    borderColor : "white"
  }

  return (
   <div> 
    <div className='container' style={darkMode ? containerStyle : containerStyleDark}>
      <h1 className='heading'>Try to toggle the theme and see the change !!!</h1>
      <button className='toggle' style={darkMode ? toggleStyle : toggleStyleDark} onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
    </div>
    </div>
  )
}

export default App

