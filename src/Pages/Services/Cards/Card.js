import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'
const Card = ({ image, altText, businessLabel, businessTitle, businessPara,btText1, btText2 }) => {
  return (
    
              <div className="cards-box">
          <div className="cards-inside">
              <div className='card-image-box'>
              <img src={image} alt={altText}/></div>
              <label className='card-label'>{ businessLabel}</label>
                  <h2 className='card-title'>{businessTitle}</h2>
              <p className='card-para'> {businessPara} </p>
              <div className='button-box'>
              <button className='primary-button'>{ btText1}</button>
              <Link to='https://api.whatsapp.com/send?phone=918736082960&text=Hiii%20!!%20%F0%9F%99%83' target='_blank'>   <button className="secondary-button">{ btText2}</button>
</Link>
              </div>
              </div>
          
          
          </div>
      
    
    
    )
}

export default Card