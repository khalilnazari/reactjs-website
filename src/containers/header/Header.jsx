import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      {/* left column contents */}
      <div className="gpt3__header-content">
        {/* title & para */}
        <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

        {/* input feild */}
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        
        {/* people */}
        <div className="gpt3__header-content__people">
          <img src={people} alt="people"/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      {/* left image */}
      <div className="gpt3__header-image">
        <img src={ai} alt="icon"/>
      </div>
    </div>
  )
}

export default Header