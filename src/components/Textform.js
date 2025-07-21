import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState("");
  const [history, setHistory] = useState([]);
  const [redoHistory, setRedoHistory] = useState([]);

  const handleUpperCase = () => {
    if (!text) return;
    setHistory([...history, text]);
    setRedoHistory([]);
    setText(text.toUpperCase());
    props.showAlert("Converted to UPPERCASE", "success");
  };

  const handleLowerCase = () => {
    if (!text) return;
    setHistory([...history, text]);
    setRedoHistory([]);
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase", "success");
  };

  const Undo = () => {
    if (history.length === 0) return;
    const prevText = history[history.length - 1];
    setRedoHistory([text, ...redoHistory]);
    setHistory(history.slice(0, -1));
    setText(prevText);
    props.showAlert("Undo successful", "success");
  };

  const Redo = () => {
    if (redoHistory.length === 0) return;
    const nextText = redoHistory[0];
    setHistory([...history, text]);
    setRedoHistory(redoHistory.slice(1));
    setText(nextText);
    props.showAlert("Redo successful", "success");
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking text...", "success");
  };

  const stopSpeaking = () => {
  window.speechSynthesis.cancel();
  props.showAlert("Speech stopped", "success");
};


  const clearText = () => {
    if (!text) return;
    setHistory([...history, text]);
    setRedoHistory([]);
    setText("");
    props.showAlert("Text cleared", "success");
  };

  const handleCapitalize = () => {
  if (!text) return;
  setText(
    text.replace(/\b\w/g, char => char.toUpperCase())
  );
  props.showAlert("Capitalized each word", "success");
};

const handleCopy = () => {
  navigator.clipboard.writeText(text);
  props.showAlert("Text copied to clipboard", "success");
};

  // Calculate word count and read time
  const words = text.trim().length > 0 ? text.trim().split(/\s+/).length : 0;
  const characters = text.length;
  const readTime = (0.008 * words).toFixed(2);

  return (
    <div
      style={{
        color: props.mode === "dark" ? "white" : "#042743"
      }}
    >
      <div className="mb-3 container custom-style">
        <label htmlFor="box1" className="form-label h2 fw-bold mt-4" >
          {props.heading}
        </label>
        <textarea
          className="form-control custom-style"
          value={text}
          id="box1"
          rows="8"
          onChange={handleOnchange}
          style={{
            backgroundColor: props.mode === "dark" ? " #0a63a7" : "white",
            color: props.mode === "dark" ? "white" : "#042743",
                caretColor: props.mode === "dark" ? "white" : "#042743"  // 👈 Add this line

          }}
        ></textarea>

        <button className="btn btn-primary my-2 mx-1" onClick={handleUpperCase}>UpperCase</button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleLowerCase}>LowerCase</button>
        <button className="btn btn-warning mx-2 my-2" onClick={speak}>Speak</button>
        <button className="btn btn-warning mx-2 my-2" onClick={stopSpeaking}>Stop</button>
        <button className="btn btn-danger mx-2 my-2" onClick={clearText}>Clear</button>
        <button className="btn btn-success mx-2 my-2" onClick={Undo}>Undo</button>
        <button className="btn btn-success mx-2 my-2" onClick={Redo}>Redo</button>
        <button className="btn btn-info mx-2 my-2" onClick={handleCapitalize}>Capitalize Words
        </button>
        <button className="btn btn-secondary mx-2 my-2" onClick={handleCopy}>Copy Text
        </button>
      </div>
      

      <div className="container"    style={{
        color: props.mode === "dark" ? "white" : "#042743"
      }}>
        <h2>Your Text Summary</h2>
        <p>{words} words and {characters} characters</p>
        <p>Estimated Read Time: {readTime} minutes</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview..."}</p>
      </div>
    </div>
  );
}
