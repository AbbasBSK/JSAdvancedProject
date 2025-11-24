// ui-factory.js
// ماژولی که فقط یک چیز می‌سازد: DOM کارت محصول
// نشانگر Modular (SRP) و Functional (ورودی -> خروجی، کمترین side-effect)

import { eventBus } from './bus.js';

export function createProductCard(product){
  // تابعی که ورودی می‌گیرد و یک DOM node بازمی‌گرداند
  const wrap = document.createElement('div');
  wrap.className = 'card';
  wrap.setAttribute('data-id', product.id);

  const title = document.createElement('h4');
  title.textContent = product.name;

  const price = document.createElement('div');
  price.className = 'price';
  price.textContent = product.price + ' تومان';

  const btn = document.createElement('button');
  btn.className = 'btn btn-primary';
  btn.type = 'button';
  btn.textContent = 'افزودن';

  // اینجا فقط انتشار رویداد — منطق ذخیره/افزودن در سرویس جداست
  btn.addEventListener('click', () => {
    eventBus.emit('cart:add', { productId: product.id });
  });

  wrap.appendChild(title);
  wrap.appendChild(price);
  wrap.appendChild(btn);
  return wrap;
}