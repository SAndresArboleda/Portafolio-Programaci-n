/*https://www.instagram.com/reel/C66muH5tDwI/?igsh=MWl5MGNhdmlwcDVpdg%3D%3D */


var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadous: true
    },
    loop: true,
});