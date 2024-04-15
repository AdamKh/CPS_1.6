import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import '../../node_modules/swiper/swiper.scss'
import '../scss/style.scss'

let screenWidth = document.documentElement.clientWidth
const swiperWrapper = document.querySelector('.swiper-wrapper')
let mobileDevice = false,
  tableDevice = false,
  pcDevice = false

if (screenWidth >= 768 && screenWidth < 1120) {
  tableDevice = true
} else if (screenWidth >= 1120) {
  pcDevice = true
} else {
  mobileDevice = true
}

if (mobileDevice) {
  var swiper = new Swiper('.repair-brands__catalog--mySwiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
} else {
  swiperWrapper.classList.add('repair-brands__catalog--grid')
}

const showMoreBrands = document.querySelector('.repair-brands__show-more')
const showMoreBrandsIcon = document.querySelector(
  '.repair-brands__show-more .show-more__icon'
)

const brandCardTableHidden = document.querySelectorAll(
  '.brand-card--table-hidden'
)
const brandCardPcHidden = document.querySelectorAll('.brand-card--pc-hidden')

const btn = document.querySelector('.repair-brands__show-more')
let btnClassList = btn.classList

showMoreBrands.addEventListener('click', function () {
  if (Array.from(btnClassList).includes('repair-brands__show-more--show')) {
    btn.textContent = 'Скрыть'

    for (let i = 0; i < brandCardTableHidden.length; i++) {
      brandCardTableHidden[i].classList.remove('brand-card--table-hidden')
      brandCardTableHidden[i].classList.remove('brand-card--pc-hidden')
      brandCardTableHidden[i].classList.add('brand-card--table-show')
    }

    btn.classList.remove('repair-brands__show-more--show')
    btn.classList.add('repair-brands__show-more--close')
  } else {
    btn.textContent = 'Показать все'

    if (pcDevice) {
      for (let i = 0; i < brandCardPcHidden.length; i++) {
        brandCardPcHidden[i].classList.remove('brand-card--pc-show')
        brandCardPcHidden[i].classList.add('brand-card--pc-hidden')
      }
    } else {
      for (let i = 0; i < brandCardTableHidden.length; i++) {
        brandCardTableHidden[i].classList.remove('brand-card--table-show')
        brandCardTableHidden[i].classList.add('brand-card--table-hidden')
      }
    }

    btn.classList.remove('repair-brands__show-more--close')
    btn.classList.add('repair-brands__show-more--show')
  }
})
