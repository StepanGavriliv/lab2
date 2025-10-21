const currency = 'USD';
const date = '20220707';

const url = new URL('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange');
url.searchParams.set('valcode', currency);
url.searchParams.set('date', date);
url.searchParams.set('json', '');

console.log(url.toString());
