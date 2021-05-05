const toTop = () => {
    window.onscroll = () => {
        scrollObservable();
    }
}

const scrollObservable = () => {
    const buttonToTop = document.querySelector('.btn-to-top');

    buttonToTop.addEventListener('click', () => {
        scrollToTop();
    });

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        return buttonToTop.style.display = "block";
    }
    buttonToTop.style.display = "none";
}

const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default toTop;