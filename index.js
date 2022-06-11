let images = document.querySelectorAll('.infinity-slider img')
let currentSlide = 0

function slider() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity0')
    }

    // document.querySelector('.btn-infinity-up').onclick = function () {
    images[currentSlide].classList.remove('opacity0')

    if (currentSlide + 1 == images.length) {
        currentSlide = 0;
    } else {
        currentSlide++
    }
}





setInterval(() => {
    slider()
}, 2000)


// document.querySelector('.btn-infinity-up').onclick = function () {
//     images[currentSlide].classList.remove('opacity0')

//     if (currentSlide + 1 == images.length) {
//         currentSlide = 0;
//     } else {
//         currentSlide++
//     }
// }