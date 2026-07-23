# PayX JavaScript SDK

PayX JavaScript SDK — PayX Merchant API bilan ishlash uchun yaratilgan rasmiy Node.js kutubxonasi.

Ushbu SDK orqali siz:

- 💳 Invoice (to'lov) yaratishingiz
- 📊 Invoice holatini tekshirishingiz
- 🔍 Checkout ma'lumotlarini olishingiz
- 🚀 To'lov jarayonini boshlashingiz
- 🧪 Sandbox muhitida to'lovni simulyatsiya qilishingiz
- ✅ Sandbox to'lov holatini tekshirishingiz mumkin.

---

# O'rnatish

```bash
npm install payxuz
```

yoki

```bash
yarn add payxuz
```

---

# Talablar

- Node.js 18 yoki undan yuqori
- PayX Merchant API Token

> SDK global `fetch()` funksiyasidan foydalanadi.

---

# Boshlash

```javascript
const { PayX } = require("payxuz");

const payx = new PayX("YOUR_API_TOKEN");
```

Agar boshqa server ishlatilsa:

```javascript
const payx = new PayX("YOUR_API_TOKEN", {
    baseUrl: "https://backend.payx.uz"
});
```

---

# API metodlari

## 1. Invoice yaratish

```javascript
const invoice = await payx.createInvoice({
    ref: "ORDER-1001",
    sum: 50000,
    izoh: "Mahsulot uchun to'lov"
});
```

yoki

```javascript
await payx.createInvoice({
    payer_reference: "ORDER-1001",
    amount: 50000,
    description: "Mahsulot uchun to'lov"
});
```

### Parametrlar

| Parametr | Tavsif |
|----------|--------|
| ref | Buyurtma ID |
| sum | To'lov summasi |
| izoh | To'lov izohi |

Shuningdek quyidagi nomlar ham qo'llab-quvvatlanadi:

- payer_reference
- amount
- description

---

## 2. Invoice holatini olish

```javascript
const status = await payx.getInvoiceStatus(invoice.uuid);
```

yoki

```javascript
await payx.getInvoiceStatus({
    uuid: invoice.uuid
});
```

---

## 3. Checkout ma'lumotlarini olish

```javascript
const checkout = await payx.getCheckoutInfo(invoice.uuid);
```

---

## 4. To'lovni boshlash

```javascript
const payment = await payx.startPayment(
    invoice.uuid,
    "payme"
);
```

yoki

```javascript
await payx.startPayment({
    uuid: invoice.uuid,
    method: "click"
});
```

---

## 5. Sandbox to'lovini simulyatsiya qilish

```javascript
await payx.simulatePayment({
    uuid: invoice.uuid,
    method: "payme",
    action: "pay"
});
```

### Parametrlar

| Parametr | Tavsif |
|----------|--------|
| uuid | Invoice UUID |
| method | To'lov tizimi |
| action | Amal (standart: pay) |

---

## 6. Sandbox holatini tekshirish

```javascript
const status = await payx.getSandboxStatus(invoice.uuid);
```

---

# Misol

```javascript
const { PayX } = require("payxuz");

const payx = new PayX("YOUR_API_TOKEN");

(async () => {

    const invoice = await payx.createInvoice({
        ref: "ORDER-1001",
        sum: 100000,
        izoh: "Test to'lovi"
    });

    console.log(invoice);

    const checkout = await payx.getCheckoutInfo(invoice.uuid);

    console.log(checkout);

    const payment = await payx.startPayment(
        invoice.uuid,
        "payme"
    );

    console.log(payment);

})();
```

---

# Mavjud metodlar

| Metod | Tavsif |
|--------|--------|
| createInvoice() | Invoice yaratadi |
| getInvoiceStatus() | Invoice holatini qaytaradi |
| getCheckoutInfo() | Checkout ma'lumotlarini oladi |
| startPayment() | To'lovni boshlaydi |
| simulatePayment() | Sandbox to'lovini yaratadi |
| getSandboxStatus() | Sandbox holatini tekshiradi |

---

# Xatoliklar

API tomonidan qaytarilgan javob to'g'ridan-to'g'ri foydalanuvchiga qaytariladi.

SDK ichida quyidagi holat tekshiriladi:

- API Token mavjudligi
- fetch() funksiyasi mavjudligi

---

# Litsenziya

MIT License

---

# Muallif

PayX Uzbekistan
ochiq kod:https://github.com/velwix10/payx
saytimiz:https://velwix.web.app
dasturchi:htts://allaberganov.web.app

Agar loyiha sizga foydali bo'lsa ⭐ berishni unutmang.