
const fetch = require('node-fetch');


fetch('https://http-hunt.thoughtworks-labs.net/challenge/input', {
    method: 'GET',
    headers: {
        'userId': 'dYrpMiSPp'
    }
})
    .then(res => res.json())
    .then(json => {
        const body = {
            "count":json.length
        };
        fetch('https://http-hunt.thoughtworks-labs.net/challenge/output', {
            method:'POST',
            body: JSON.stringify(body),
            headers: {
                'userId': 'dYrpMiSPp',
                'Content-Type': 'application/json'
            }
        }).then((res)=> res.json()).then((d)=>  console.log(d)).catch((e)=> console.log(e));
    }
    );
