// الحصول على عناصر الصفحة
const messageElement = document.getElementById("message");
const dateElement = document.getElementById("date");
const counterElement = document.getElementById("counter");

// تاريخ اليوم
const today = new Date();

// رقم اليوم داخل السنة
const start = new Date(today.getFullYear(), 0, 0);
const diff = today - start;
const oneDay = 1000 * 60 * 60 * 24;
const dayOfYear = Math.floor(diff / oneDay);

// اختيار الرسالة تلقائياً
const index = dayOfYear % messages.length;

// عرض الرسالة
messageElement.innerHTML = messages[index];

// عرض التاريخ بالعربية
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

dateElement.innerHTML =
today.toLocaleDateString('ar-EG', options);

// عرض رقم الرسالة
counterElement.innerHTML =
`رسالة ${index + 1} من ${messages.length}`;

// تأثير ظهور الرسالة
messageElement.style.opacity = "0";

setTimeout(() => {

    messageElement.style.transition = "1s";

    messageElement.style.opacity = "1";

},300);
