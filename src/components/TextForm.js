import React, {useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('');
  const [paragraphs, setParagraphs]= useState(0);

  const handleUpClick = () =>{
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!", "success");
  }
  const handleLoClick = () =>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase!", "success")
  }
  const handleToClear = () =>{
        let newText= "";
        setText(newText);
        props.showAlert("cleared the text!", "success")
  }

const countSentences= () => {
    if (!text || typeof text !== 'string') return 0;
    const sentenceMatches = text.match(/[.!?]+(?!\S)/g);
    return sentenceMatches ? sentenceMatches.length : 0;
};

const handleOnChange = (event) =>{
    setText(event.target.value);
};

const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setParagraphs((prevParagraphs) => prevParagraphs + 1);
    }
};


const countSpaces = (text) => {
    if (!text || typeof text !== 'string') return 0;
    const spaceMatches = text.match(/\s/g);
    return spaceMatches ? spaceMatches.length : 0;
};

const countPunctuations = (text) => {
    if (!text || typeof text !== 'string') return 0;
    const punctuations = text.match(/[.,/#!$%^&*;:{}=\-_`~()]/g);
    return punctuations ? punctuations.length : 0;
};

const handleCopy = (event) => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text copied", "success")
}

const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extra spaces removed", "success")
}
return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div class="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} onKeyDown={handleKeyDown} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn primary  mx-2" onClick={handleUpClick} style={{color: props.mode==='dark'?'white':'#042743'}}>Convert to Uppercase</button>
        <button className="btn btn primary mx-2" onClick={handleLoClick} style={{color: props.mode==='dark'?'white':'#042743'}}>Convert to Lowercase</button>
        <button className="btn btn primary mx-2" onClick={handleToClear} style={{color: props.mode==='dark'?'white':'#042743'}}>Clear Text</button>
        <button className="btn btn primary mx-2" onClick={handleCopy} style={{color: props.mode==='dark'?'white':'#042743'}}>Copy Text</button>
        <button className="btn btn primary mx-2" onClick={handleExtraSpaces} style={{color: props.mode==='dark'?'white':'#042743'}}>Remove Extra Space</button>
    </div>
    <div class="section-divider" ></div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>
        Words: {text
            ? text
            .trim()
            .split(/\s+/)
            .filter((word) => word !== "").length
            : 0}{" "}
        </p>
        <p>Characters: {text.length}</p>
        <p>Minutes to read: {0.008 * text.split("").length} min</p>
        <p>Number of sentences: {countSentences(text)} </p>
        <p>Spaces: {countSpaces(text)}</p>
        <p>Punctuations: {countPunctuations(text)}</p>
        <p>Paragraphs: {paragraphs}</p> 
        
        <div class="section-divider"></div>

        <h2>Preview</h2>
        <p>{text.length === 0 ? "Write something in the textbox above to preview" : text}</p>

    </div>

    </>
    )
}
