const shareIcon = document.querySelector('.share-icon')

shareIcon.addEventListener('click', () => {
    let sw = getScreenWidth();
    if(sw <= 499) {
        const shareInfoMobile = document.querySelector('.share-info__mobile');
        shareInfoMobile.classList.add('share-info__mobile--active')
    }
    else {
        //attivi il tooltip
    }
});

function getScreenWidth() {
    return screen.width;
}