const fetch = require('cross-fetch');

async function fetchUsers(){
    var fetchUsers = await fetch('https://jsonplaceholder.typicode.com/users');
    var data = await fetchUsers.json();
    console.log(data);
}

fetchUsers();