export function slider() {
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
}
