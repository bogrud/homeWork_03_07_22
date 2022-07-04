const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLenght = slideRight.querySelectorAll('div').length

let activeSlieIndex = 0
slideLeft.style.top = `-${(slidesLenght - 1) * 100}vh `

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight
  if (direction === 'up') {
    activeSlieIndex++;
    if(activeSlieIndex > slidesLenght -1) {
      activeSlieIndex = 0;
    }
  } else if(direction === 'down') {
    activeSlieIndex--;
    if(activeSlieIndex < 0){
      activeSlieIndex = slidesLenght -1;
    }
  }
  slideRight.style.transform = `translateY(-${activeSlieIndex * sliderHeight}px)`
  slideLeft.style.transform = `translateY(${activeSlieIndex * sliderHeight}px)`
}
