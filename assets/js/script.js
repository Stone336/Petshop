// const container = document.querySelector(".header");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 0) {
//     container.classList.add("bg-scroll");
//   } else {
//     container.classList.remove("bg-scroll");
//   }
// });

// ADD TO CART
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartCountElement = document.getElementById('cart-count');
let cartCount = 0;

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.getAttribute('data-product');
    cartCount++;
    cartCountElement.textContent = cartCount;
  });
});

// AUTO SLICK
$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
});