import React, { useState } from 'react';

export default function TextArea(props) {
  // Initialize the state with an empty string

  

  const Upper = () => {
    console.log("I am clicked");
    let Ntext = text.toUpperCase();
    setText(Ntext); // Update text with the modified text
  }

  const Lower = () => {
    console.log("I am clicked");
    let Ntext = text.toLowerCase();
    setText(Ntext); // Update text with the modified text
  }

  var alternateCase =  ()=> {
    var chars = text.toLowerCase().split("");
    for (var i = 0; i < chars.length; i += 2) {
      chars[i] = chars[i].toUpperCase();
    }
    let Ntext =chars.join("");
    setText(Ntext) 
  };

  const Clear = () => {
    console.log("I am clicked");
    let Ntext = '';
    setText(Ntext); // Update text with the modified text
  }

  const OnWriting = (event) => {
    console.log("Writing");
    setText(event.target.value);
  }

  const [text, setText] = useState('');

  return (
    <>
        
      <div className={`container text-${(props.mode==='light')?'dark':'light'}`}>
           <div className="form-group my-3">
              <h3>
                <label htmlFor="exampleFormControlTextarea1">{props.Text}</label>
              </h3>
              <div className="container my-3">
               <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?"#708090":"#FFFFFF"}} value={text} onChange={OnWriting} placeholder='Enter the Text' id="exampleFormControlTextarea1" rows="8" />
              </div>
               <button className="btn btn-primary mx-2" onClick={Upper}>Upper Case</button>
               <button className="btn btn-primary mx-2" onClick={Lower}>Lower Case</button>
               <button className="btn btn-primary mx-2" onClick={alternateCase}>AlTeRnAtInG StRiNg</button>
               <button className="btn btn-primary mx-2" onClick={Clear}>Clear</button>
           </div>
      </div>

      <div className={`container text-${(props.mode==='light')?'dark':'light'}`}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words   {text.length} Characters</p>
        <p>{0.005 * text.split(" ").length} (min) Reading Time</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
