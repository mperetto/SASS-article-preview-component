const shareIcon = document.querySelector('.share-icon')

shareIcon.addEventListener('click', () => {
    
    const shareInfoMobile = document.querySelector('.share-info__mobile');
    shareInfoMobile.classList.toggle('share-info__mobile--active');
    shareIcon.classList.toggle('share-icon--active');
}, shareIcon);