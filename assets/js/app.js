import { createProductCard } from '/assets/js/moduls/product.js';
import { products , images1 , images2 } from '/assets/js/moduls/data.js';
import { createAutoSlider } from '/assets/js/moduls/slider.js';
import { toggleTheme } from './moduls/them.js';

// ایجاد کارت‌ها
const productsContainer = document.getElementById('products');
products.forEach(product => {
  const card = createProductCard(product);
  productsContainer.appendChild(card);
});


createAutoSlider('slider1', images1 , 500);
createAutoSlider('slider2', images2 , 4000);

// رویداد کلیک دکمه برای تغییر تم
document.getElementById('themeToggle').onclick = toggleTheme;
