import React from 'react';
import './Gallery.css';
import { Link } from 'react-router-dom'
function Gallery(){
    return(
        <div className='gallery'>
              <Link 
              to="/hero"
              style={{ 
                position: 'absolute',
                right: 520,
                width: 350, 
                top: 650, 
                color: 'white',
                margin: 10,        
                font: 'Times New Roman',
                textAlign: 'center', 
                fontFamily: 'Times New Roman',
                padding: 15.1,
                border: 'solid',
                borderColor: 'white',
                textDecoration: 'none'
              }}
              > 
              BACK TO CIVILIZATION
              </Link>
        </div>
    );
}


export default Gallery;