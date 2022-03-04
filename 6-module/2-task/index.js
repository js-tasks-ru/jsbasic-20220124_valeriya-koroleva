export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.card = document.createElement('div');
    this.card.classList.add("card");

    this.card.insertAdjacentHTML('beforeEnd', 
      `<div class="card__top">
          <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
          <span class="card__price">€${product.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
          <div class="card__title">${product.name}</div>
          <button type="button" class="card__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
      </div>`);

      this.card.addEventListener('click',(event) =>{
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
  return this.card;
}
}