// img arr
let images = document.querySelectorAll('.infinity-slider img')
let currentSlide = 0

function slider() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity0')
    }
    images[currentSlide].classList.remove('opacity0')

    // // Auto play
    // images[currentSlide].classList.remove('opacity0')
    // if (currentSlide + 1 == images.length) {
    //     currentSlide = 0;
    // } else {
    //     currentSlide++
    // }
}

// // Auto play
// setInterval(() => {
//     slider()
// }, 2000)

// чтобы не тормозило
slider()

document.querySelector('.btn-infinity-left').onclick = function () {
    if (currentSlide == images.length - 1) {
        // console.log(images.length); // 4
        currentSlide = 0;
    } else {
        currentSlide++
    }
    slider()
}

document.querySelector('.btn-infinity-right').onclick = function () {
    if (currentSlide - 1 == -1) {
        currentSlide = images.length - 1;
    } else {
        currentSlide--
    }
    slider()
}
