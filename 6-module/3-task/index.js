import createElement from '../../assets/lib/create-element.js';
export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.carousel = createElement(`<div class="carousel">
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    <div class="carousel__inner">
    </div>
  </div>`);

    for (const elem of this.slides) {
      this.carousel.querySelector('.carousel__inner').append(createElement( 
      `<div class="carousel__slide" data-id="${elem.id}">
      <img src="/assets/images/carousel/${elem.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${elem.price.toFixed(2)}</span>
        <div class="carousel__title">${elem.name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>`));
  }

  this.btnPrev = this.carousel.querySelector('.carousel__arrow_left');
  this.btnNext = this.carousel.querySelector('.carousel__arrow_right');
  this.sliger = this.carousel.querySelector('.carousel__inner');
  this.viewSlide = 0;
  console.log(this.sliger);

  this.btnPrev.style.display = 'none';

  this.btnNext.addEventListener('click', () => {
    this.carouselInnerWidth = this.sliger.offsetWidth;

    this.viewSlide -= this.carouselInnerWidth;
    this.sliger.style.transform = `translateX(${this.viewSlide}px)`;

    if (this.viewSlide < 0) {
      this.btnPrev.style.display = '';
    }

    if (this.viewSlide === -this.carouselInnerWidth * (this.slides.length - 1)) {
      this.btnNext.style.display = 'none';
    }
  });


  this.btnPrev.addEventListener('click', () => {
    this.carouselInnerWidth = this.sliger.offsetWidth;

    this.viewSlide += this.carouselInnerWidth;
    this.sliger.style.transform = `translateX(${this.viewSlide}px)`;

    if (this.viewSlide > -this.carouselInnerWidth * (this.slides.length - 1)) {
      this.btnNext.style.display = '';
    }

    if (this.viewSlide === 0) {
      this.btnPrev.style.display = 'none';
    }
  });

  this.carousel.addEventListener('click',(event) =>{
    const btn = event.target.closest('.card__button') 
    if(btn){
      const productAddBtn = new CustomEvent('product-add',{
        detail: this.product.id,
        bubbles : true,
      })
    btn.dispatchEvent(productAddBtn);
  }})
  
}

get elem() {
  return this.carousel;
}
}


