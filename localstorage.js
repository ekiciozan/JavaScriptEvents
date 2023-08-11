// Local Storage

const name = localStorage.setItem('name','Ozan');
console.log(localStorage)
// tarayıcı kapandıgında ve acıldıgında hala bu değişkenleri tutmak 
//istiyorsak localStroge,  kapanıp acıldıgında kaybolsun istiyorsan sessionStorage 
// ile tutmak gerekiyor.



// Session Storage

console.log(sessionStorage)
const country = sessionStorage.setItem('country','TR');