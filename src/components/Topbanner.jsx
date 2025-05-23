import React from 'react'
import './styles/Topbanner.scss'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import 'swiper/css'
const Topbanner = ({onClick}) => {
  return (
    <div className='top_banner'>
        <Swiper
            direction='vertical'
            slidesPerView={1}
            loop={true}
            autoplay={{delay:3000}}
            modules={[Autoplay]}
            className='tb_slider'
        >
            <SwiperSlide>
                <a href="#">소중한 순간에 더욱 빛나는 티파니 아이콘으로 사랑을 전하세요.</a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#">사랑을 약속하는 특별한 순간, 영원히 기억에 남을 티파니의 완벽한 프로포즈 셀렉션을 만나보세요.</a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#">티파니 스털링 실버 주얼리 유상 클리닝 서비스를 받으시고, 소중한 제품을 아름답게 간직하세요.</a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#">가까운 티파니앤코 매장에서 우리의 전문 어드바이저화 함께 로멘틱한 순간을 계획해 보세요.</a>
            </SwiperSlide>
        </Swiper>
        <div className="close" onClick={onClick}>click</div>
    </div>
  )
}

export default Topbanner