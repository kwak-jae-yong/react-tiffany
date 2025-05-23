import React from 'react'
import './styles/RightQuick.scss'
const RightQuick = ({isScrolled, onClick}) => {
  return (
    <div id='right_quick' className={isScrolled? "up":""}>
      <a href="#" className='top_btn' onClick={onClick}>
      
      </a>
      <div className="talk">
        <a href="#">TIFFANY</a>
        <p className='point'>GOtoTOP</p>
      </div>
    </div>
  )
}

export default RightQuick