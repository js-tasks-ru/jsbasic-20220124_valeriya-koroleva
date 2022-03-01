function initCarousel() {
  let btnNext = document.querySelector('.carousel__arrow_right');
  let btnPrev = document.querySelector('.carousel__arrow_left');
  let sliger = document.querySelector('.carousel__inner');
  let viewSliders = document.querySelectorAll('.carousel__slide');
  let viewport = document.querySelector('.container').offsetWidth;
  let viewSlide = 0;
  

btnNext.addEventListener('click', goNextCarosel);
btnPrev.addEventListener('click', goPrevCarosel);

noneBtn();

  function goNextCarosel() {
    if (viewSlide < 3) {
        viewSlide++;
    } else {
        viewSlide = 0;
    }
    let position = -viewSlide * viewport + "px";
    sliger.style.transform = `translateX(${position})`;
  }

  function goPrevCarosel () {
    if (viewSlide > 0) {
      viewSlide--;
  } else {
      viewSlide = 3;
  }
  let position = -viewSlide * viewport + "px";
  sliger.style.transform = `translateX(${position})`;
  }
  function noneBtn () {
    if (viewSlide === 0) {
      btnPrev.style.display = 'none';
      btnNext.style.display = '';
    } else if (viewSlide === 3) {
      btnNext.style.display = 'none';
      btnPrev.style.display = '';
    }
  }
}
