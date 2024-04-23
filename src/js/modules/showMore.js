export function toggleShowMoreButton(
  showMoreButton,
  tableHiddenCards,
  pcHiddenCards,
  pcDevice,
  card
) {
  if (showMoreButton.classList.contains('show-more--show')) {
    showMoreButton.textContent = 'Скрыть'
    for (let i = 0; i < tableHiddenCards.length; i++) {
      tableHiddenCards[i].classList.remove(card + '--table-hidden')
      tableHiddenCards[i].classList.remove(card + '--pc-hidden')
      tableHiddenCards[i].classList.add(card + '--table-show')
    }
    showMoreButton.classList.remove('show-more--show')
    showMoreButton.classList.add('show-more--close')
  } else {
    showMoreButton.textContent = 'Показать все'

    if (pcDevice) {
      for (let i = 0; i < pcHiddenCards.length; i++) {
        pcHiddenCards[i].classList.remove(card + '--pc-show')
        pcHiddenCards[i].classList.add(card + '--pc-hidden')
      }
    } else {
      for (let i = 0; i < tableHiddenCards.length; i++) {
        tableHiddenCards[i].classList.remove(card + '--table-show')
        tableHiddenCards[i].classList.add(card + '--table-hidden')
      }
    }

    showMoreButton.classList.remove('show-more--close')
    showMoreButton.classList.add('show-more--show')
  }
}
