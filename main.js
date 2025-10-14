const { URL, URLSearchParams } = require('url');

// 🔹 Константи згідно з варіантом 1
const currency = 'USD';
const date_from = '20220707';
const date_to = '20220719'; // не використовується напряму, але можна зберегти

// 🔹 Базова адреса API
const baseUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange';

// 🔹 Створення URL-об'єкта
const url = new URL(baseUrl);

// 🔹 Додавання параметрів до URL
url.search = new URLSearchParams({
  valcode: currency,
  date: date_from,
  json: ''
});

// 🔹 Вивід готового URL у консоль
console.log(url.toString());