// About.js
import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
function About() {
  const audioUrl = process.env.PUBLIC_URL + '/music/Lebron.mp3';
  return(
    <div className="about">
      <div className='main-text'> 
            <h1>
            hi everyone.
            </h1>
            <p>im <Link to="/hero"
              style={{
                    color: 'white',
                    textDecoration: 'underline'
                  }}
              >
               Ray 
            </Link> and a couple of my favourite things are 
            muay thai (i am down to go with anyone any time), 
            volleyball, POKER, coding (if i have a cool idea) and Jesus (one of my favourite people). <br></br>
            <br></br>i guess i have to talk a little bit more
            about myself. so im from the greatest Canadian city ever Toronto. my favourite food in the whole wide world is 
            lasagna. and me and math have a love and hate relationship.  <br></br> 
            <br></br> i guess im done now, but its my website so im plugging myself. Check out my photos and projects and get in touch with me. ill hold
            pads for you.<br></br> (play the song, its currently my favourite)
            </p>

        </div>
        <div className='audio-display'>
              <audio controls>
                <source src={audioUrl} type="audio/mpeg" />
              </audio>
            </div>
  </div>
  );
}

export default About;
