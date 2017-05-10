console.log('testing');
const DATABASE_URL = 'https://arcane-retreat-92908.herokuapp.com';


fetch(DATABASE_URL, {
	method: 'get',
	headers:{
       'Accept': 'application/json',
       'Content-Type': 'application/json'
   }}).then((result) => {
   	console.log('some string');
	console.dir(result);
})

// fetch('/api/update', {
//    method: 'put',
//    body: JSON.stringify(data),
//    headers: {
//      'Accept': 'application/json',
//      'Content-Type': 'application/json'
//    }
//  })
// fetch(request, {mode: 'no-cors'})
// .then(function(response) {
//  console.log(response);
// }).catch(function(error) {  
//  console.log('Request failed', error)  
// });

