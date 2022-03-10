import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.ribbon = createElement(
      `<div class="ribbon">
    <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    <nav class="ribbon__inner"></nav>
    
    <button class="ribbon__arrow ribbon__arrow_right ">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>`
    );

    this.ribbonInner = this.ribbon.querySelector(".ribbon__inner");

    for (const elem of this.categories) {
      this.ribbonInner.insertAdjacentHTML(
        "beforeEnd",
        `<a href="#" class="ribbon__item" data-id="${elem.id}">${elem.name}</a>`
      );
    }

    this.btnPrev = this.ribbon.querySelector(".ribbon__arrow_left");
    this.btnNext = this.ribbon.querySelector(".ribbon__arrow_right");
    this.btnPrev.classList.remove("ribbon__arrow_visible");
    this.btnNext.classList.add("ribbon__arrow_visible");

    this.ribbon.addEventListener("click", (event) => {
      if (event.target.closest(".ribbon__arrow_right")) {
        this.ribbonInner.scrollBy(350, 0);
        this.btnPrev.classList.add("ribbon__arrow_visible");
        if (this.ribbonInner.scrollWidth-this.ribbonInner.scrollLeft-this.ribbonInner.clientWidth < 1) {
          this.btnNext.classList.remove("ribbon__arrow_visible");
        }
      }
      if (event.target.closest(".ribbon__arrow_left ")) {
        this.ribbonInner.scrollBy(-350, 0);
        this.btnNext.classList.add("ribbon__arrow_visible");
        if (this.ribbonInner.scrollLeft === 0) {
          this.btnPrev.classList.remove("ribbon__arrow_visible");
        }
      }
    });

    this.ribbon.addEventListener("click", (event) => {
      event.preventDefault();
      this.ribbonItem = event.target.closest(".ribbon__item");
      this.itemActive = this.ribbon.querySelector(".ribbon__item_active");

      if (this.ribbonItem) {
        this.ribbonItem.classList.add("ribbon__item_active");
        const ribbonSelect = new CustomEvent("ribbon-select", {
          detail: this.ribbonItem.dataset.id,
          bubbles: true,
        });
        this.ribbonItem.dispatchEvent(ribbonSelect);
        if (this.itemActive) {
          this.itemActive.classList.remove("ribbon__item_active");
        }
      }
    });
  
  }

  get elem() {
    return this.ribbon;
  }
}
