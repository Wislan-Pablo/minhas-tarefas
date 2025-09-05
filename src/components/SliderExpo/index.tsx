import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Game } from '../../App'
import CardSliderExpo from './CardSliderExpo'

type Props = {
  games: Game[]
}

const SlideExpo = ({ games }: Props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={5} // 👈 quantidade itens mostrados no limite do Swiper
      spaceBetween={24} // 👈 espaçamento entre os slides
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation
      color="#fff"
      pagination={{ clickable: true }}
      loop={false} // 👈 não faz sentido loopar se mostrar todos
      style={{ width: '100%', paddingBottom: '40px' }} // 👈 ocupa 100% da section
      centerInsufficientSlides={true} // 👈 garante centralização se tiver menos que 5
      breakpoints={{
        // quando a tela for >= 0px (mobile)
        0: {
          slidesPerView: 2
        },
        // quando a tela for >= 640px (tablet)
        640: {
          slidesPerView: 3
        },
        // quando a tela for >= 960px (desktop)
        960: {
          slidesPerView: 5
        },
        // quando a tela for >= 1440px (desktop grande)
        1440: {
          slidesPerView: 8
        }
      }}
    >
      {games.map((game) => (
        <SwiperSlide key={game.id} style={{ width: '200px', height: 'auto' }}>
          <CardSliderExpo game={game} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SlideExpo
