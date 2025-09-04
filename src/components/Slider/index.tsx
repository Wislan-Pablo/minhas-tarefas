import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectExpo } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import Banner from '../Banner'
import ProductSlider from '../ProductSlider'
import { Game } from '../../App'

type Props = {
  effect: 'slide' | 'expo'
  game?: Game[]
}

const Carousel = ({ effect, game }: Props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectExpo]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      loop
      speed={1000}
      effect={effect} // aplica 'slide' ou 'fade'
    >
      {effect === 'slide' ? (
        <>
          <SwiperSlide>
            <Banner />
          </SwiperSlide>
          <SwiperSlide>
            <Banner />
          </SwiperSlide>
          <SwiperSlide>
            <Banner />
          </SwiperSlide>
        </>
      ) : (
        <SwiperSlide>
          <ProductSlider game={game} />
        </SwiperSlide>
      )}
    </Swiper>
  )
}

export default Carousel
