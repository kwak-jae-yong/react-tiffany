import React, { useState } from 'react'
import './styles/Footer.scss'
import {
  footerCenterMenu,
  footerCompany,
  footerInfoLinks,
  snsIcons,
  customerCenter

} from '../data/FooterData'
const Footer = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <footer>
      <div className="inner">
        <div className="left">
          <h3>
            <img src={footerCompany.logo} alt="logo" />
          </h3>
          <p className="foot_txt1">
            (주)티파니코리아 │ 대표자: {footerCompany.ceo} <br />
            주소: {footerCompany.address} <br />
            사업자등록번호: {footerCompany.bizNum} │ <strong>[사업자정보확인]</strong> <br />
            통신판매업신고: {footerCompany.salesReport} │ 호스팅서비스: {footerCompany.Host} <br />
            고객샌터: {footerCompany.tel} │ 이메일: {footerCompany.email} <br />
          </p>
          <p className="foot_txt2">
            {footerCompany.iou1} <br />
            {footerCompany.iou2}

          
          </p>
          <p className="foot_txt2-5">
           
            {footerCompany.copyright} <br />
          </p>
        </div>
        <ul className="center">
          {footerCenterMenu.map((menu, idx) => (
            <li key={idx}>
              <a href="#">{menu.title}</a>
              <ul>
                {menu.links.map((link, i) => (
                  <li key={i}>
                    <a href="#">
                      {link}
                    </a>
                  </li>

                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="right">
          <p
            onClick={() => setIsOpen(!isOpen)}
            className={`foot_txt3 ${isOpen ? "open" : ""}`}>
            Customer Center <span></span>
          </p>
          <div className="hidden">
            <div className="tel">
              {customerCenter.tel}
            </div>
            <p className="foot_txt4">
              {customerCenter.time} <br />
              {customerCenter.off}
            </p>
            <a href="#" className='talk_btn'>1:1 TALK</a>


          </div>
        </div>
      </div>
       <div className="inner">
            <div className="info">
          {footerInfoLinks.map((link, i) => (
            <a href={link.href} key={i}>{link.text}</a>

          ))}
          {/* footerInfoLinks */}
        </div>
        <p className="foot_txt2">
          {footerCompany.copyright}
        </p>
          <div className="sns">
            {snsIcons.map((icon, i) => (
              <a href='#' key={i}>
                <img src={icon.src} alt={icon.alt} />
              </a>
            ))}
          </div>

        </div>
    </footer>
  )
}

export default Footer