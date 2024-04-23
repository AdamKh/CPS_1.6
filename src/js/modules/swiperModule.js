import Swiper from '../../../node_modules/swiper'
import { freeMode, Pagination } from '../../../node_modules/swiper/modules'

export function initializeSwiper(swiperCatalog, paginationEl, breakpoint) {
  new Swiper(swiperCatalog, {
    modules: [Pagination],
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    loop: true,
    pagination: {
      el: paginationEl,
      clickable: true
    },
    breakpoints: {
      breakpoint: {
        initialSlide: 0,
        spaceBetween: 0,
        enable: false
      }
    }
  })
}
