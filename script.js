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