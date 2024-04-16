import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import '../../node_modules/swiper/swiper.scss'
import '../scss/style.scss'

let screenWidth = document.documentElement.clientWidth
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

const swiperBrandsWrapper = document.querySelector('.repair-brands__wrapper')
const swiperKindsWrapper = document.querySelector('.repair-kinds__wrapper')
let swiperBrands = '.repair-brands__catalog--mySwiper'
let swiperKinds = '.repair-kinds__catalog--mySwiper'
if (mobileDevice) {
  var swiper1 = new Swiper(swiperBrands, {
    modules: [Navigation, Pagination],
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    loop: true,
    pagination: {
      el: '.repair-brands__swiper-pagination',
      clickable: true
    }
  })
  var swiper2 = new Swiper(swiperKinds, {
    modules: [Navigation, Pagination],
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    loop: true,
    pagination: {
      el: '.repair-kinds__swiper-pagination',
      clickable: true
    }
  })
} else {
  swiperBrandsWrapper.classList.add('repair-brands__catalog--grid')
  swiperKindsWrapper.classList.add('repair-kinds__catalog--grid')
}

const showMoreBrands = document.querySelector('.repair-brands__show-more')
const brandCardTableHidden = document.querySelectorAll(
  '.brand-card--table-hidden'
)
const brandCardPcHidden = document.querySelectorAll('.brand-card--pc-hidden')

let showMoreBrandsClassList = showMoreBrands.classList

showMoreBrands.addEventListener('click', function () {
  if (Array.from(showMoreBrandsClassList).includes('show-more--show')) {
    showMoreBrands.textContent = 'Скрыть'

    for (let i = 0; i < brandCardTableHidden.length; i++) {
      brandCardTableHidden[i].classList.remove('brand-card--table-hidden')
      brandCardTableHidden[i].classList.remove('brand-card--pc-hidden')
      brandCardTableHidden[i].classList.add('brand-card--table-show')
    }

    showMoreBrands.classList.remove('show-more--show')
    showMoreBrands.classList.add('show-more--close')
  } else {
    showMoreBrands.textContent = 'Показать все'

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

    showMoreBrands.classList.remove('show-more--close')
    showMoreBrands.classList.add('show-more--show')
  }
})

const showMoreKinds = document.querySelector('.repair-kinds__show-more')
const kindCardTableHidden = document.querySelectorAll(
  '.kind-card--table-hidden'
)
const kindCardPcHidden = document.querySelectorAll('.kind-card--pc-hidden')

let showMoreKindsClassList = showMoreKinds.classList

showMoreKinds.addEventListener('click', function () {
  if (Array.from(showMoreKindsClassList).includes('show-more--show')) {
    showMoreKinds.textContent = 'Скрыть'

    for (let i = 0; i < kindCardTableHidden.length; i++) {
      kindCardTableHidden[i].classList.remove('kind-card--table-hidden')
      kindCardTableHidden[i].classList.remove('kind-card--pc-hidden')
      kindCardTableHidden[i].classList.add('kind-card--table-show')
    }

    showMoreKinds.classList.remove('show-more--show')
    showMoreKinds.classList.add('show-more--close')
  } else {
    showMoreKinds.textContent = 'Показать все'

    if (pcDevice) {
      for (let i = 0; i < kindCardPcHidden.length; i++) {
        kindCardPcHidden[i].classList.remove('kind-card--pc-show')
        kindCardPcHidden[i].classList.add('kind-card--pc-hidden')
      }
    } else {
      for (let i = 0; i < kindCardTableHidden.length; i++) {
        kindCardTableHidden[i].classList.remove('kind-card--table-show')
        kindCardTableHidden[i].classList.add('kind-card--table-hidden')
      }
    }

    showMoreKinds.classList.remove('show-more--close')
    showMoreKinds.classList.add('show-more--show')
  }
})

const sidebar = document.querySelector('.sidebar')
const notAside = document.querySelector('.not-aside')
const burger = document.querySelector('.button_burger')
const closeSidebar = document.querySelector('.button_close')

burger.addEventListener('click', function () {
  sidebar.classList.toggle('sidebar-show')
  notAside.classList.toggle('not-aside--opacity')
})

closeSidebar.addEventListener('click', function () {
  sidebar.classList.toggle('sidebar-show')
  notAside.classList.toggle('not-aside--opacity')
})
