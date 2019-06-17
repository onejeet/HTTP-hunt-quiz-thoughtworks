
const fetch = require('node-fetch');


fetch('https://http-hunt.thoughtworks-labs.net/challenge', {
    method: 'GET',
    headers: {
        'userId': 'dYrpMiSPp'
    }
})
    .then(res => res.text())
    .then(body => console.log(body));
