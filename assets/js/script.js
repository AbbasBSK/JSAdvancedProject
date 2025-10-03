// // تمرین: ادغام مفاهیم برنامه‌نویسی شی‌گرا (OOP) و تابعی (FP)
// // هدف: درک تفاوت‌ها و کاربردهای هر رویکرد با مثال ساده و توضیحات کامل

// --- تعریف یک کلاس (OOP) ---
// کلاس Product نماینده یک محصول است
class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	// متد نمونه برای نمایش اطلاعات محصول
	display() {
		return `محصول: ${this.name} | قیمت: ${this.price} تومان`;
	}
}

// --- ایجاد چند نمونه (Object) از کلاس ---
const p1 = new Product('لپ‌تاپ', 50000000);
const p2 = new Product('گوشی', 20000000);
const p3 = new Product('هدفون', 3000000);

// --- آرایه‌ای از محصولات (Composition) ---
const products = [p1, p2, p3];

// --- برنامه‌نویسی تابعی (FP) ---
// استفاده از توابع pure و higher-order برای کار با داده‌ها

// تابع pure: افزایش قیمت هر محصول بدون تغییر شی اصلی (اصل immutability)
function increasePrice(product, percent) {
	// شی جدید برمی‌گرداند (تغییرناپذیری)
	let newPrice = product.price + product.price * (percent / 100)
	return new Product(product.name, newPrice);
}

// تابع higher-order: اعمال یک تابع روی همه محصولات (map)
function mapProducts(products, fn) {
	return products.map(fn);
}

// تابع pure: فیلتر محصولات گران‌تر از مقدار داده شده
function filterExpensive(products, minPrice) {
	return products.filter(p => p.price > minPrice);
}

// تابع pure: جمع قیمت محصولات (reduce)
function totalPrice(products) {
	return products.reduce((sum, p) => sum + p.price, 0);
}

// // --- استفاده ترکیبی از OOP و FP ---

// // افزایش قیمت همه محصولات ۱۰٪
// const increasedProducts = mapProducts(products, p => increasePrice(p, 10));

// // فیلتر محصولات با قیمت بالای ۲۰ میلیون
// const expensiveProducts = filterExpensive(increasedProducts, 20000000);

// // جمع قیمت محصولات گران
// const sumExpensive = totalPrice(expensiveProducts);

// // --- نمایش نتایج ---
// console.log('محصولات اولیه:');
// products.forEach(p => console.log(p.display()));

// console.log('\nمحصولات با افزایش قیمت:');
// increasedProducts.forEach(p => console.log(p.display()));

// console.log('\nمحصولات گران‌تر از ۲۰ میلیون:');
// expensiveProducts.forEach(p => console.log(p.display()));

// console.log(`\nجمع قیمت محصولات گران: ${sumExpensive} تومان`);

// // --- توضیحات تکمیلی ---
// // ویژگی‌های OOP:
// // - تعریف کلاس و نمونه‌سازی (encapsulation)
// // - متدهای نمونه (متد display)
// // ویژگی‌های FP:
// // - توابع pure (بدون side effect)
// // - عدم تغییر داده اصلی (immutability)
// // - استفاده از توابع higher-order (map, filter, reduce)
// // - ترکیب‌پذیری توابع
// // این تمرین نشان می‌دهد که می‌توان از قدرت هر دو رویکرد برای ساخت کدهای خوانا، قابل تست و توسعه‌پذیر استفاده کرد.



















// --- تابع pure: کاهش قیمت با تخفیف ---
function applyDiscount(product, percent) {
  // شی جدید می‌سازیم (اصل immutability)
  return new Product(product.name, product.price * (1 - percent / 100));
}

// --- اعمال تخفیف ۱۵٪ روی همه محصولات ---
const discountedProducts = mapProducts(products, p => applyDiscount(p, 15));

// --- فیلتر محصولات با قیمت کمتر از ۱۰ میلیون ---
const cheapProducts = discountedProducts.filter(p => p.price < 10000000);

// --- جمع کل قیمت محصولات ارزان ---
const totalCheap = totalPrice(cheapProducts);

// --- نمایش نتایج ---
console.log('محصولات با تخفیف ۱۵٪:');
discountedProducts.forEach(p => console.log(p.display()));

console.log('\nمحصولات زیر ۱۰ میلیون بعد از تخفیف:');
cheapProducts.forEach(p => console.log(p.display()));

console.log(`\nجمع قیمت محصولات زیر ۱۰ میلیون: ${totalCheap} تومان`);
// 🔍 توضیح برای دانشجوه
