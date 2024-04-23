const sidebar = document.querySelector('.sidebar')
const notAside = document.querySelector('.not-aside')
const feedback = document.querySelector('.feedback')
const callRequest = document.querySelector('.call-request')

function showElement(element) {
  element.classList.add(`${element.classList[0]}-show`)
}

function hideElement(element) {
  element.classList.remove(`${element.classList[0]}-show`)
}

function showModal(modal) {
  ;[sidebar, feedback, callRequest].forEach(hideElement)
  notAside.classList.add('not-aside--opacity')
  showElement(modal)
}

function closeModal() {
  ;[sidebar, feedback, callRequest].forEach(hideElement)
  notAside.classList.remove('not-aside--opacity')
}

export { showModal, closeModal }
