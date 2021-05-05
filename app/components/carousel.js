const carousel = () => {
    const elements = document.querySelectorAll('.carousel');
    M.Carousel.init(elements, {
        duration: 30,
        numVisible: 5
    });
}

export default carousel;