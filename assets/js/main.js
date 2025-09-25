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


