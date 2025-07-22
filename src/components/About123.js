import React, { useState } from 'react';

export default function About123(props) {
  let myStyle ={
    color: props.mode === 'dark' ?'white':'#042743',
    backgroundColor : props.mode==='dark'?'rgb(36 74 104)':'white',
  }



  return (
    <div style={myStyle}>
      <div className="container mb-8 py-4" style={{marginTop:'4rem'}}>
        <h1 className='mb-4'>About Us</h1>

        <div className="accordion" id="accordionExample">

          {/* Accordion 1 */}
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Text Transformation</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                 app’s first feature allows you to convert your text into uppercase, lowercase, or capitalized form.
              </div>
            </div>
          </div>

          {/* Accordion 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               <strong> Voice, Copy, Undo/Redo Support</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                The app lets you speak the text, copy it to the clipboard, and use undo/redo to reverse your changes.
              </div>
            </div>
          </div>

          {/* Accordion 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               <strong> Smart Summary</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                The app instantly provides a summary of your text — including word count, character count, and estimated reading time.
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}
