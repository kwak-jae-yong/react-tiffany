import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './styles/Section1.scss'
const Section1 = () => {

  useEffect(()=>{

    Aos.init({duration:1000})

  },[])



  return (
    <section className='sc1'>
      <div className="inner">
        <div className="img-wrap" data-aos="fade-right">
          <img src="./img/s1img.png" alt="intro" />
        </div>
        <div className="t-wrap" data-aos="fade-left">
          <p className="txt_1">
            Hello💎 We are TIFFANY!
          </p>
          <h2 className="con_tit">
          The Tiffany
          Diamond
          </h2>
          <p className="txt">
          새로운 Jean Schlumberger by Tiffany 버드 온 어 락 링에는 <br />
          젬스톤 위에 호기심과 경이로움으로 가득한 새가 살포시 앉아 있습니다.
          </p>
          <a href="#" className="con_btn">MEET TIFFANY</a>
        </div>
      </div>
    </section>
  )
}

export default Section1