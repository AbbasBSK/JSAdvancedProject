// app.js
import { createProductCard } from './math.js';
import { createAutoSlider } from './math.js';
import { toggleTheme } from './math.js';
import { images1 , images2 , products } from './math.js';


// ایجاد کارت‌ها
const productsContainer = document.getElementById('products');
products.forEach(product => {
  const card = createProductCard(product);
  productsContainer.appendChild(card);
});

// ایجاد اسلایدرها
createAutoSlider('slider1', images1, 2500);
createAutoSlider('slider2', images2, 4000);
// رویداد کلیک دکمه برای تغییر تم
document.getElementById('themeToggle').onclick = toggleTheme;