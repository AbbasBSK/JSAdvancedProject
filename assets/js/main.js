
// app.js
import { createAutoSlider } from             './main.js';
import { toggleTheme } from                  './main.js';
import { images1 , images2 , products } from './main.js';



// ایجاد اسلایدرها
createAutoSlider('slider1', images1, 2500);
createAutoSlider('slider2', images2, 4000);
// رویداد کلیک دکمه برای تغییر تم
document.getElementById('themeToggle').onclick = toggleTheme;








// slider.js
export function createAutoSlider(containerId, images, interval = 3000) {
  const container = document.getElementById(containerId);
  let current = 0;

  // تابع برای نمایش تصویر فعلی
  function showSlide(index) {
    container.innerHTML = '';
    const img = document.createElement('img');
    img.src = images[index];
    img.className = 'slider-image';
    container.appendChild(img);
  }

  // نمایش اولین تصویر
  showSlide(current);

  // تغییر تصویر با فاصله زمانی مشخص
  setInterval(() => {
    current = (current + 1) % images.length;
    showSlide(current);
  }, interval);
}



// theme.js
function setTheme(mode) {
  document.body.setAttribute('data-theme', mode);
}

export function toggleTheme() {
  const current = document.body.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}






// داده محصولات
export const products = [
  { title: 'تیشرت', price: 200000, qty: 1 },
  { title: 'کفش ورزشی', price: 1200000, qty: 1 },
  { title: 'تیشرت', price: 200000, qty: 1 },
  { title: 'کفش ورزشی', price: 1200000, qty: 1 },
];

// تصاویر هر دسته از اسلایدر ها

export const images1 = [
  './assets/images/background.jpg',
  './assets/images/background2.jfif',
  './assets/images/بکگراند.jpg',
];
export const images2 = [
  './assets/images/rock3.jpg',
  './assets/images/jsPro.png',
  './assets/images/n1.jpg',
];
