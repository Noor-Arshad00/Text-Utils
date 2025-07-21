import React from 'react'

export default function Not() {
  return (
    <div>
      <div className="nav-bar">
        <h1>AOT</h1>
        <ul>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">PROJECT</a></li>
            <li><a href="#">BLOG</a></li>
        </ul>
        <button className="btn">DARKMODE</button>
      </div>
      <div className="about">
        <div className="box1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro inventore ut iusto iste repudiandae eveniet, sint consectetur vitae doloremque deserunt.</div>
        <div className="box2">
            <h1>I'm GETTING BOR</h1>
        </div>
      </div>
      <div className="counter container">
        <p>Enter You TEXT HERE</p>
        <textarea name="" id="" cols="30" rows="20">TELL me</textarea>
        <div className="btn-option">
            <div className="clear">
                <button className="btn">Clear</button>
            </div>
            <div className="upper">
                <button className="btn">Upper</button>
            </div>
        </div>
      </div>

           </div>
  )
}
