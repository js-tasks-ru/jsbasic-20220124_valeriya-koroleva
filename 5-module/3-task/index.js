function initCarousel() {
  let btnNext = document.querySelector('.carousel__arrow_right');
  let btnPrev = document.querySelector('.carousel__arrow_left');
  let sliger = document.querySelector('.carousel__inner');
  let viewport = document.querySelector('.container').offsetWidth;
  let viewSlide = 0;
  
btnNext.addEventListener('click', goNextCarosel);
btnPrev.addEventListener('click', goPrevCarosel);

  function goNextCarosel() {
    if (viewSlide < 3) {
        viewSlide++;
    }
    let position = -viewSlide * viewport + "px";
    sliger.style.transform = `translateX(${position})`;

    if (viewSlide == 3) {
      btnNext.style.display = 'none';
    } else {
      btnPrev.style.display = '';
    }
  }

  function goPrevCarosel () {
    if (viewSlide > 0) {
      viewSlide--;
  } 
  let position = -viewSlide * viewport + "px";
  sliger.style.transform = `translateX(${position})`;
  if (viewSlide == 0) {
    btnPrev.style.display = 'none';
  } else {
    btnNext.style.display = '';
  }
  }
}