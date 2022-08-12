const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleShoppingCart);


function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive')
  }
  desktopMenu.classList.toggle('inactive')
};

function toggleMobileMenu() {
  console.log('click')
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive')
  }

  mobileMenu.classList.toggle('inactive')
};

function toggleShoppingCart() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobilMenu.classList.add('inactive')
  }

  aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
  name: 'Pantalla',
  price: 620,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'computador',
  price: 700,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Celular',
  price: 500,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Pantalon',
  price: 70,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Sofa',
  price: 800,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

/* <div class="product-card">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" class="product-card">
      <div class="product-info">
        <div>
          <p>120.00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src="/shopper/assets/icons/bt_add_to_cart.svg" alt="">
        </figure>
      </div>
    </div> */

for (product of productList) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image)

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-Info');

  const productInfoDiv = document.createElement('div');
  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;
  const productName = document.createElement('p')
  productName.innerText = product.name;

  productInfoDiv.appendChild(productPrice)
  productInfoDiv.appendChild(productName)


  const productInfoFigure = document.createElement('figure');
  const productImgCart = document.createElement('img');
  productImgCart.setAttribute('src', '/shopper/assets/icons/bt_add_to_cart.svg')

  productInfoFigure.appendChild(productImgCart);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);


  cardsContainer.appendChild(productCard)
}