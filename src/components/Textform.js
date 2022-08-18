import React, { useState } from 'react';
import './Textform.css'
import PropTypes from 'prop-types';
export default function Textform(props) {
     const cleartxt = () => { 
         settext('');
         props.showslert("cleared text", "warning");
    }
    const convert = () => { 
        console.log("converting to uppercase");
        settext(text.toUpperCase())
        props.showslert("converted to upper case", "success");
        document.getElementsByClassName("textdiv").style.display = "block";
    
    }
      const convertlower = () => { 
        console.log("converting to uppercase");
          settext(text.toLowerCase())
           props.showslert("converted to lower case", "success");
        document.getElementsByClassName("textdiv").style.display = "block";
   
      }
    const change = (event) => { 
        settext(event.target.value) //event parameter is ddefualt passed onchange

    }
    const removespace = () => { 
        let newtext = text.split(/[ ]+/);
        props.showslert("extra space removed", "success");
        settext(newtext.join(" "));

    }
    const copy = () => { 
        // var gettext = document.getElementById("myinput");
        // gettext.select();
        // gettext.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text);
         props.showslert("copied to clipboard", "success");
    }
    const [text, settext] = useState('');//right way
    //text = "krutikkrutikrjr"// wrong way to change the state use setetxt function to change the value of etxt
    //settext('new twxt'); //correct way
    return (
        <div className='myapp'>
            <label htmlFor="myinput" class="form-label"><h1>{props.heading}</h1></label>  
        <div className="input-group mb-3">
                <textarea className="form-control" value={text} onChange={change} aria-label="With textarea" id='myinput' rows={8} cols={50}></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={convert}>convert to uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={convertlower}>convert to lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={cleartxt}>clear text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={removespace}>remove extra space</button>
              <button className="btn btn-primary mx-2 my-2" onClick={copy}>copy to clipboard</button>
            <div className="textdiv">
                <h1>Your text Summary</h1>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <p>{(text.split(" ").length) * 0.008} minutes to read</p>
                <h1>Preview</h1>
                <p>{text===''?"enter the text to preview":text}</p>
            </div>
           
        </div>
    );
}
