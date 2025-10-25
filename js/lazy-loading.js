// ЯКЩО САЙТ НЕ АДАПТИВНИЙ ОБОВЯЗКОВО ДОБАВИТИ ВИСОТУ та ШИРИНУ ДЛЯ IMG В HTML
// до кожної картинки добавити атрибут - loading="lazy"

// існує подія закінчення завантаження картинки

const lazyImages = document.querySelectorAll('img[loading="lazy"]');

// addEventListener - приймає 3 аргумент - опцію
// налаштування цього слухача - для ого щоб його не видаляти
//  він спрацює 1 раз і самовидалиться
lazyImages.forEach((image) => {
  image.addEventListener("load", onImageLoaded, { once: true });
});

function onImageLoaded(event) {
  console.log("img download alredy");
  //   тепер можна з ними щось зробити
  // наприклад добавити анімацію
}

// можна добавити без атрибута loading через бібліотеку
// LAZYSIZES - підходить для адаптивних картинок
// потрібно додати class=lazyload та змінити src на data-src
// FEATURE-DETECTION  - ЯКЩО БРАУЗЕР ПІДТРИУЄ ПО ЗАОМЧУВАННЮ
// БІБЛІОТЕКУ НЕ ВИКОРИСТОВУЄМО
// видаляємо скрипт - і додаємо його по умові тільки в тому браузері де треба


// називаєтрьбся кросбаузерне рішення
if ("loading" in HTMLImageElement.prototype) {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  lazyImages.forEach((img) => {
    img.src = img.dataset.src;
  });
} else {
  const script = document.createElement("script");
  script.src =
    "сюди вставляємо src Скрипта з бібліотеки який підключається по умові";
  script.integrity = ".......";
  script.crossOrigin = ".....";

  document.body.appendChild(script);
}

