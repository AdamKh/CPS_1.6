export function show_more() {
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
}
