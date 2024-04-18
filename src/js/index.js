import Swiper from '../../node_modules/swiper'
import '../../node_modules/swiper/swiper.scss'
import { freeMode, Pagination } from '../../node_modules/swiper/modules'
import '../../node_modules/swiper/modules/pagination.scss'
import '../../node_modules/swiper/modules/free-mode.scss'
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
let swiperPrice = '.price-list__catalog--mySwiper'
if (mobileDevice) {
  var swiper1 = new Swiper(swiperBrands, {
    modules: [Pagination],
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
    modules: [Pagination],
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    loop: true,
    pagination: {
      el: '.repair-kinds__swiper-pagination',
      clickable: true
    }
  })
  var swiper3 = new Swiper(swiperPrice, {
    modules: [Pagination],
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    loop: true,
    pagination: {
      el: '.price-list__swiper-pagination',
      clickable: true
    },
    breakpoints: {
      768: {
        initialSlide: 0,
        spaceBetween: 0,
        enable: false
      }
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
const closeSidebar = document.querySelector('.sidebar__button-close')

const feedback = document.querySelector('.feedback')
const closeFeedback = document.querySelector('.feedback__button-close')
const buttonsChat = document.querySelectorAll('.button_chat')

const callRequest = document.querySelector('.call-request')
const closeCallRequest = document.querySelector('.call-request__button-close')
const buttonsCall = document.querySelectorAll('.button_call')

burger.addEventListener('click', function () {
  sidebar.classList.remove('sidebar-show')
  feedback.classList.remove('feedback-show')
  callRequest.classList.remove('call-request-show')
  sidebar.classList.add('sidebar-show')
  notAside.classList.add('not-aside--opacity')
})

closeSidebar.addEventListener('click', function () {
  sidebar.classList.remove('sidebar-show')
  feedback.classList.remove('feedback-show')
  callRequest.classList.remove('call-request-show')
  notAside.classList.remove('not-aside--opacity')
})

buttonsChat[0].addEventListener('click', function () {
  sidebar.classList.remove('sidebar-show')
  feedback.classList.remove('feedback-show')
  callRequest.classList.remove('call-request-show')
  feedback.classList.add('feedback-show')
  notAside.classList.add('not-aside--opacity')
})

buttonsChat[1].addEventListener('click', function () {
  sidebar.classList.remove('sidebar-show')
  feedback.classList.remove('feedback-show')
  callRequest.classList.remove('call-request-show')
  feedback.classList.add('feedback-show')
  notAside.classList.add('not-aside--opacity')
})

closeFeedback.addEventListener('click', function () {
  sidebar.classList.remove('sidebar-show')
  feedback.classList.remove('feedback-show')
  callRequest.classList.remove('call-request-show')
  notAside.classList.remove('not-aside--opacity')
})

buttonsCall[0].addEventListener('click', function () {
  sidebar.classList.remove('sidebar-show')
  feedback.classList.remove('feedback-show')
  callRequest.classList.add('call-request-show')
  notAside.classList.add('not-aside--opacity')
})

buttonsCall[1].addEventListener('click', function () {
  sidebar.classList.remove('sidebar-show')
  feedback.classList.remove('feedback-show')
  callRequest.classList.add('call-request-show')
  notAside.classList.add('not-aside--opacity')
})

closeCallRequest.addEventListener('click', function () {
  sidebar.classList.remove('sidebar-show')
  feedback.classList.remove('feedback-show')
  callRequest.classList.remove('call-request-show')
  notAside.classList.remove('not-aside--opacity')
})
