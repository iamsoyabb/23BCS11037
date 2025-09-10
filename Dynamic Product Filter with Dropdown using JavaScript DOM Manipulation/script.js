const filterDropdown = document.getElementById('category-filter');
const products = document.querySelectorAll('.product');

filterDropdown.addEventListener('change', function () {
  const selectedCategory = this.value;

  products.forEach(product => {
    const productCategory = product.getAttribute('data-category');

    if (selectedCategory === 'all' || productCategory === selectedCategory) {
      product.classList.remove('hidden');
    } else {
      product.classList.add('hidden');
    }
  });
});
