import React from 'react'
import './styles/Section3.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Section3 = () => {

    const slideClasses = [
        's3_sl1',
        's3_sl2',
        's3_sl3'
    ]


    return (
        <section className='sc3'>
            <div className="inner">
                <div className="t-wrap">
                    <h2 className="con_tit">
                        Enter the World of <br />
                        <strong>Tiffany</strong> High Jewelry
                    </h2>
                    <p className="txt">
                        최초의 국제적 하이 주얼리 하우스인 티파니는 독창적인 예술성과 <br />
                        탁월한 장인정신으로 널리 사랑을 받고 있습니다.
                    </p>
                    <a href="#" className='con_btn blue'>
                        Meet Tiffany
                    </a>
                </div>
                <div className="s3_sl_wrap">
                    <div className="in">
                        <Swiper
                            spaceBetween={30}
                            sliderPerView={1}
                            loop={true}
                            breakpoints={{
                                600: { slidesPerView: 1 },
                                1024: {
                                    slidesPerView: 2
                                }
                            }}
                        >
                            {slideClasses.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className={slide}></div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Section3