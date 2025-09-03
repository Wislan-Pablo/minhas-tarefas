import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, effect } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Banner from '../Banner'
import { EffectFade } from 'swiper/modules'

const Carousel = () => (
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={30}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 6000, disableOnInteraction: false }}
    loop={true}
    speed={1000} // duração da transição em ms (2 segundos)
  >
    <SwiperSlide>
      <Banner />
    </SwiperSlide>
    <SwiperSlide>
      <Banner />
    </SwiperSlide>
    <SwiperSlide>
      <Banner />
    </SwiperSlide>
  </Swiper>
)

export default Carousel
