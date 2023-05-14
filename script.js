// DROPDOWN 
var toggle = document.querySelector('.dropdown-toggle');
var content = document.querySelector('.dropdown-content');

function toggleDropdown() {
    content.classList.toggle('show');
}

// Show dropdown menu on click for mobile devices
toggle.addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default behavior of the link/button
    if (window.innerWidth <= 768) {
        toggleDropdown();
    }
});

// Show dropdown menu on hover for larger screens
toggle.addEventListener('mouseenter', function() {
    if (window.innerWidth > 768) {
        toggleDropdown();
    }
});

content.addEventListener('mouseenter', function() {
    if (window.innerWidth > 768) {
        toggleDropdown();
    }
});

toggle.addEventListener('mouseleave', function() {
    if (window.innerWidth > 768) {
        toggleDropdown();
    }
});

content.addEventListener('mouseleave', function() {
    if (window.innerWidth > 768) {
        toggleDropdown();
    }
});

// Hide dropdown menu when window is resized to a larger size
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        content.classList.remove('show');
    }
});




// ADD TO CART FUNKTION 

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

// DROPDOWN SAMME STØRELSE SOM KNAPPEN