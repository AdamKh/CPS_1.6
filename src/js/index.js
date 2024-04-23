import '../../node_modules/swiper/swiper.scss'
import '../../node_modules/swiper/modules/pagination.scss'
import '../scss/style.scss'

// import modules
import { detectDevice } from './modules/deviceType'
import { initializeSwiper } from './modules/swiperModule'
import { toggleShowMoreButton } from './modules/showMore'
import { showModal, closeModal } from './modules/modal'

// detect device
let screenWidth = document.documentElement.clientWidth
let { mobileDevice, tableDevice, pcDevice } = detectDevice(screenWidth)

//  show-more
const brandCard = 'brand-card'
const showMoreBrands = document.querySelector('.repair-brands__show-more')
const brandCardTableHidden = document.querySelectorAll(
  '.brand-card--table-hidden'
)
const brandCardPcHidden = document.querySelectorAll('.brand-card--pc-hidden')

showMoreBrands.addEventListener('click', function () {
  toggleShowMoreButton(
    showMoreBrands,
    brandCardTableHidden,
    brandCardPcHidden,
    pcDevice,
    brandCard
  )
})

const kindCard = 'kind-card'
const showMoreKinds = document.querySelector('.repair-kinds__show-more')
const kindCardTableHidden = document.querySelectorAll(
  '.kind-card--table-hidden'
)
const kindCardPcHidden = document.querySelectorAll('.kind-card--pc-hidden')

showMoreKinds.addEventListener('click', function () {
  toggleShowMoreButton(
    showMoreKinds,
    kindCardTableHidden,
    kindCardPcHidden,
    pcDevice,
    kindCard
  )
})

//  modal
const notAside = document.querySelector('.not-aside')

const sidebar = document.querySelector('.sidebar')
const burger = document.querySelector('.button_burger')
const closeSidebar = document.querySelector('.sidebar__button-close')

const feedback = document.querySelector('.feedback')
const buttonsChat = document.querySelectorAll('.button_chat')
const closeFeedback = document.querySelector('.feedback__button-close')

const callRequest = document.querySelector('.call-request')
const buttonsCall = document.querySelectorAll('.button_call')
const closeCallRequest = document.querySelector('.call-request__button-close')

burger.addEventListener('click', function (event) {
  event.stopPropagation()
  showModal(sidebar)
})

closeSidebar.addEventListener('click', function () {
  closeModal()
})

buttonsChat.forEach(function (button, index) {
  button.addEventListener('click', function (event) {
    event.stopPropagation()
    showModal(feedback)
  })
})

closeFeedback.addEventListener('click', function () {
  closeModal()
})

buttonsCall.forEach(function (button, index) {
  button.addEventListener('click', function (event) {
    event.stopPropagation()
    showModal(callRequest)
  })
})

closeCallRequest.addEventListener('click', function () {
  closeModal()
})

notAside.addEventListener('click', function (event) {
  closeModal()
})

//  swiper
let swiperBreakpoint = 768

let swiperBrands = '.repair-brands__catalog--mySwiper'
let swiperBrandsPagination = '.repair-brands__swiper-pagination'

var swiper1 = initializeSwiper(
  swiperBrands,
  swiperBrandsPagination,
  swiperBreakpoint
)

let swiperKinds = '.repair-kinds__catalog--mySwiper'
let swiperKindsPagination = '.repair-kinds__swiper-pagination'

var swiper2 = initializeSwiper(
  swiperKinds,
  swiperKindsPagination,
  swiperBreakpoint
)

let swiperPrice = '.price-list__catalog--mySwiper'
let swiperPricePagination = '.price-list__swiper-pagination'

var swiper3 = initializeSwiper(
  swiperPrice,
  swiperPricePagination,
  swiperBreakpoint
)
