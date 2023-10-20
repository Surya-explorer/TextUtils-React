import React , {useState} from 'react'
export default function TextForm(Props) {
    // Format for useState : 
    // const[count , setCount] = useState (0) ;
    
    const [text , setText] = useState('') ;
    // We cannot update the Text in react simply by Text ="sdfaf" rather we have to use the function for it - setText("sdfaf")
    // *********** Wrong way to change the state 
    //             - Text ="sdfaf"
    // *********** Correct way to change the state 
    //             - setText("sdfaf")
    const handleUpClick = () =>{
        let newtext = text.toUpperCase() ;
        setText(newtext) ;
        Props.showAlert("Converted to upperCase" , "success") ;
    }
    const handleOnChange = (event) =>{
        // console.log("On change") ;
        setText(event.target.value) ;
    }
    const handleDownClick = () =>{
        setText(text.toLowerCase()) ;
        Props.showAlert("Converted to lowerCase" , "success")  ;
    }
    const handleClearText = () =>{
        setText("") ;
        Props.showAlert("Text Cleared", "success") ;
    }
    const handleCopy = () => {
        const text = document.getElementById("myBox");
        if (text) {
          text.select();
          navigator.clipboard.writeText(text.value);
        }
        Props.showAlert("Text Copied" , "success") ;
    };
    const handleExtraSpace = ()=>{
        let newtext = text.split(/[ ]+/) ;
        setText(newtext.join(" ")) ;
        Props.showAlert("Extraspace Removed" , "success") ;
    }
  return (
    <>
    <div className = "container" style ={{ color : Props.mode === 'dark'?'white':'#042743' }}>
        <h1>{Props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" 
            id="myBox" onChange = {handleOnChange} style ={{backgroundColor : Props.mode === 'dark'?'grey':'white' ,
            color : Props.mode === 'dark'?'white':'#042743'
             }} value = {text} rows = "10" 
            >
            </textarea>
            <button className="btn btn-primary mx-2" onClick = {handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick = {handleDownClick} >Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick = {handleClearText} >Clear Text</button>
            <button className="btn btn-primary mx-2" onClick = {handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick = {handleExtraSpace} >Clear Extra Space</button>
        </div>
    </div>
    <div className="container my-3" style ={{color : Props.mode === 'dark'?'white':'#042743'}}>
        <h2>Your Text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        {/* Text.split(" ") will give a array of words and whose length is no. of the words */}
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
    </div>
    </>

  )
} 
