// import "./App.css";
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About' 
import { useState } from "react";
import Alert from "./components/Alert"
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link ,
// }from "react-router-dom"
/* Props -> These are the necessary Items that is Required in the Components 
    here the value of the title and aboutText is Props ; title and aboutText are the attributes of tag .
    Defn :  
    In ReactJS, the props are a type of object where the value of attributes of a tag is stored. */
function App() { 
    const [mode, setMode] = useState('light');
    const toggleMode = () => {
      if (mode === 'light'){
        setMode('dark') ;
        document.body.style.backgroundColor = '#042743' ;  
        showAlert("Dark mode has been enabled" , "success") ;
        document.title = "TextUtils - Dark mode" ;
        // setInterval( () =>{
        //   document.title = "TextUtils is Amazing" ;
        // } , 2000 ) ;
        // setInterval( () =>{
        //   document.title = "Install TextUtils !" ;
        // } , 1500 ) ;
      }
      else {
        setMode('light') ;
        document.body.style.backgroundColor = 'white' ;
        showAlert("Light mode has been enabled" , "success") ;
        document.title = "TextUtils - light mode" ;
      }
    }
    const [alert, setAlert] = useState();

    const showAlert = (message , type) => {
      setAlert ({
        msg : message ,
        type : type ,
      })
      setTimeout(() => {
        setAlert(null) ;
      }, 3000);
    }
    return (
    <>
    {/* <Navbar title ="TextUtils2" aboutText   ="About Us"/> */}
    {/* <Router> */}
    <Navbar title ="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert} />
    <div className="container" my-3>
      {/* <Routes> */}

{/*********** 
If Exact matching is not used ->
              /User -----> Component 1
If Exact matching is used -> 
              /User/Home -----> Component 2 
*/}
        {/* <Route exact path ="/about" element={<About/>}>
        </Route> */}
        {/* <Route exact path="/" element={ */}
            <TextForm showAlert = {showAlert}heading="Enter your Text here " mode = {mode}/>
        {/* </Route> */}
      {/* </Routes> */}
      {/* <About mode = {mode} toggleMode = {toggleMode}/> */}
    </div>
    {/* </Router> */}
    </>
  );
}
export default App;
