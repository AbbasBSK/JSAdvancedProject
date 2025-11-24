// models.js
// OOP: دو کلاس ساده برای نشان دادن مدل‌های دامنه (Product و CartItem)

export class Product {
  constructor(id, name, price){
    this.id = String(id);
    this.name = name;
    this.price = Number(price);
  }
}

export class CartItem {
  constructor(product, quantity = 1){
    this.product = product;
    this.quantity = Number(quantity);
  }
  // متد وابسته به داده — نشانگر encapsulation در OOP
  get total(){
    return this.product.price * this.quantity;
  }
}