var toggle = document.querySelector('.dropdown-toggle');
var content = document.querySelector('.dropdown-content');

toggle.addEventListener('click', function() {
    content.classList.toggle('show');
});



// Find "add to cart" knapperne
var addToCartButtons = document.querySelectorAll('.product button');

// Tag cart-total
var cartTotal = document.getElementById('cart-total');

// Sæt pris til 0
var total = 0;

// Event listeners til "add to cart"
for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', function() {
        // Pris på produkt
        var price = parseInt(this.getAttribute('data-price'));

        // Tilføj pris
        total += price;

        // Opdater price total
        cartTotal.textContent = total + ' DKK';
    });
}