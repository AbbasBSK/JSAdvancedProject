// کلاس اصلی حساب بانکی
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;      // public field
    this._balance = balance; // private-ish field با convention _
  }

  // Getter برای خواندن موجودی (Encapsulation)
  get balance() {
    return this._balance;
  }

  // متد واریز (Abstraction)
  deposit(amount) {
    if(amount > 0) {
      this._balance += amount;
      console.log(`${amount} تومان واریز شد. موجودی جدید: ${this._balance}`);
    } else {
      console.log("مقدار واریز باید مثبت باشد!");
    }
  }

  // متد برداشت (Abstraction + validation)
  withdraw(amount) {
    if(amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      console.log(`${amount} تومان برداشت شد. موجودی جدید: ${this._balance}`);
    } else {
      console.log("برداشت نامعتبر است!");
    }
  }

  // متد استاتیک: توضیح درباره نوع حساب
  static accountType() {
    console.log("این یک حساب بانکی استاندارد است.");
  }
}

// کلاس فرزند: حساب ویژه
class PremiumAccount extends BankAccount {
  constructor(owner, balance, cashback) {
    super(owner, balance); // ارث‌بری + constructor
    this.cashback = cashback;
  }

  // متد override (پیاده‌سازی جدید متد والد)
  withdraw(amount) {
    if(amount <= this._balance) {
      this._balance -= amount;
      let cb = amount * this.cashback;
      this._balance += cb; // برگرداندن نقدی
      console.log(`${amount} برداشت شد و ${cb} تومان کش‌بک دریافت شد. موجودی جدید: ${this._balance}`);
    } else {
      console.log("برداشت نامعتبر است!");
    }
  }
}

// مثال استفاده
const myAccount = new BankAccount("علی", 1000);
console.log(myAccount.balance); // فقط خواندنی
myAccount.deposit(500);
myAccount.withdraw(200);

const premium = new PremiumAccount("زهرا", 2000, 0.05);
premium.withdraw(500);
BankAccount.accountType();




// class BankAccount {
//   // فیلد خصوصی
//   _balance = 0;

//   // getter برای گرفتن مقدار موجودی
//   get balance() {
//     return this._balance;
//   }
//   // setter برای تغییر مقدار موجودی
//   set balance(amount) {
//     console.log(amount);
//     if (amount < 0) {
//       console.log("❌ موجودی منفی مجاز نیست!");
//     } else {
//       this._balance = amount;
//       console.log(`✅ موجودی تغییر کرد: ${this._balance}`);
//     }
//   }
// }
// const account = new BankAccount();

// console.log(`موجودی فعلی: ${account.balance}`);

// account.balance = 1000;
// console.log(`موجودی جدید: ${account.balance}`);

// account.balance = -500;
// console.log(`موجودی جدید: ${account.balance}`);



































// class Animal {
//   #type = "animal";
//   constructor(name) {this.name = name; this.type = this.#type;}
//   speak() {
//     console.log(`${this.name} makes a sound.`);
//     return {a:this.#type};
//   }
// }
// // ایجاد یک نمونه
// const a = new Animal("dog")
// a.speak()
// // تعریف کلاس سگ'-----------------------------
// class Dog extends Animal {
//   constructor(a, breed) {
//     super(a);
//     this.breed = breed;
//   }
//   speak() {
//     console.log(`${this.name} barks. It is a ${this.breed}.`);
//   }
// }
// // ایجاد یک نمونه
// const dog = new Dog("Rex" , "German Shepherd");
// dog.speak(); // Rex barks. It is a German Shepherd.

// // // تعریف کلاس گربه-----------------------------
// class Cat extends Animal {
//   constructor(name , type, color , breed) {
//     super(name , type);
//     this.color = color;
//     this.breed = breed;
//   }
//   speak() {
//     console.log(`${this.name} meows. Its color is ${this.color}. Its breed is ${this.breed}.`);
//   }
// }
// const cat1 = new Cat("Kitty", "white", "Persian");
// console.log(cat1.type);

// cat1.speak(); // Kitty meows. Its color is white. Its breed is Persian.





















// // ایجاد یک نمونه
// const cat = new Cat("Whiskers");
// cat.speak(); // Whiskers meows.


// const animals = [
//   new Dog("Rex"),
//   new Cat("Kitty"),
//   new Animal("Generic")
// ];

// animals.forEach(animal => animal.speak());
















// // کلاس ساده خودرو
// class Car {
//   #fuel = 50;           // فیلد خصوصی، فقط داخل کلاس قابل دسترسی
//   // wheels = 4;
//   constructor(model, color) {
//     this.model = model; // پراپرتی عمومی
//     this.color = color; // پراپرتی عمومی
//   }

//   // متد رانندگی
//   drive(km) {
//     this.#fuel -= km / 10;
//     return `${this.model} drove ${km} km, remaining fuel: ${this.#fuel}`;
//   }

//   // متد پر کردن سوخت
//   refuel(amount) {
//     this.#fuel += amount;
//     return `${this.model} refueled ${amount}, fuel: ${this.#fuel}`;
//   }

//   // متد گرفتن اطلاعات کامل خودرو به صورت آبجکت
//   getInfo() {
//     return {
//       model: this.model,
//       color: this.color,
//       fuel: this.#fuel
//     };
//   }
// }





// // --- ساخت خودروهای جدید ---
// const car1 = new Car("Toyota", "Red");
// const car2 = new Car("BMW", "Black");


// // خروجی به صورت آبجکت
// console.log(car1.getInfo()); // { model: 'Toyota', color: 'Red', fuel: 50 }
// console.log(car2.getInfo()); // { model: 'BMW', color: 'Black', fuel: 50 }

// // استفاده از رفتارها
// console.log(car1.drive(100));  // Toyota drove 100 km, remaining fuel: 40
// console.log(car1.refuel(20));  // Toyota refueled 20, fuel: 60
// console.log(car1.fuel);
// console.log(car1.getInfo().fuel);






// // کلاس فرزند: ماشین‌های الکتریکی
// class ElectricCar extends Car {
//   constructor(model, color, battery = 100) {
//     super(model, color); // ارث‌بری از Car
//     this.battery = battery; // پراپرتی جدید مخصوص کلاس فرزند
//   }
//   // constructor(b, b, battery = 100) {
//   //   super(a, b); // ارث‌بری از Car
//   //   this.battery = battery; // پراپرتی جدید مخصوص کلاس فرزند
//   // }

//   // متد مخصوص ماشین الکتریکی
//   charge(amount) {
//     this.battery += amount;
//     return `${this.model} charged ${amount}%, battery: ${this.battery}%`;
//   }

//   // override متد getInfo برای اضافه کردن باتری
//   getInfo() {
//     const info = super.getInfo(); // گرفتن اطلاعات از کلاس پایه
//     info.battery = this.battery;  // اضافه کردن پراپرتی جدید
//     return info;
//   }
// }

// const eCar1 = new ElectricCar("Tesla", "White", 80);
// console.log(eCar1.drive(50));   // Tesla drove 50 km, remaining fuel: 45
// console.log(eCar1.charge(15));  // Tesla charged 15%, battery: 95
// console.log(eCar1.getInfo());   // { model: 'Tesla', color: 'White', fuel: 45, battery: 95 }