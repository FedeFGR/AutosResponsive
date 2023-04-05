fetch("../BD/Autos.json")
.then(response => {
   return response.json();
})
.then(data => console.log(data));

/*const data = require('./employee.json');

console.log(data);
*/