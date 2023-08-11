//@param id: string (id модального окна)
let showModalWindow = (id) => {
    let modalWindow = document.querySelector(`#${id}`)
    modalWindow.style.display = 'flex'
    window.onclick = function(event) {
        if (event.target === modalWindow) {
            modalWindow.style.display = "none";
        }
    }
    let closeBtn = modalWindow.querySelector('.modal-window-header-close-btn')
    closeBtn.addEventListener('click', () => {
        modalWindow.style.display = "none";
    })
}

let openBurgerMenu = () => {
    let popup = document.querySelector('#popup')
    if(popup.style.right === '-100%' || popup.style.right === '') {
        popup.style.right = '0%'
    } else {
        popup.style.right = '-100%'
    }
}