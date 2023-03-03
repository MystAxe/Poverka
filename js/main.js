let offset = 0

const images = document.querySelectorAll('.slider .slider-line .item');
const sliderLine = document.querySelector('.slider .slider-line');
let count = 0;
let width;

function init() {
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = width * images.length + 'px';
  images.forEach(item => {
      item.style.width = width + 'px';
      item.style.height = 'auto';
  });
  rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function() {
  count++;
    if (count >= images.length) {
        count = 0;
    }
  whichSlide(count)
  rollSlider();
})

document.querySelector('.slider-prev').addEventListener('click', function() {
  count--;
    if (count < 0) {
        count = images.length - 1;
    }
  whichSlide(count)
  rollSlider();
})

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}

function getElementIndex(node) {
  let index = 0;
  while ( (node = node.previousElementSibling) ) {
      index++;
  }
  return index;
}

function whichSlide(offsetGet) {
    allSliderDots.forEach((sliderDot) => {
      sliderDot.classList.remove('slider-dot_enabled')
    })
    allSliderDots[count].classList.add('slider-dot_enabled')
  
}

const allSliderDots = document.querySelectorAll('.slider-dot')
const sliderDots = document.querySelector('.slider-dots')
sliderDots.addEventListener('click', (event) => {
  const isSliderDot = event.target.closest('.slider-dot')
  if (isSliderDot) {
    if (!isSliderDot.classList.contains('slider-dot_enabled')) {
      const { target } = event
      allSliderDots.forEach((sliderDot) => {
        sliderDot.classList.remove('slider-dot_enabled')
      })
      target.classList.add('slider-dot_enabled')

      count = getElementIndex(isSliderDot)
      rollSlider()
    }
  }
})

const moreTextButtons = document.querySelectorAll('.more-text-button')
const moreTexts = document.querySelectorAll('.more-text')
moreTextButtons.forEach((moreTextButton) => {
  moreTextButton.textContent = 'Показать всё'
  moreTextButton.addEventListener('click', () => {
    moreTexts.forEach((moreText) => {
      if (moreText.classList.contains('more-text_switcher')) {
        moreText.classList.remove('more-text_switcher')
        moreTextButton.textContent = 'Скрыть'
      } else {
        moreText.classList.add('more-text_switcher')
        moreTextButton.textContent = 'Показать всё'
      }
    })
  })
})