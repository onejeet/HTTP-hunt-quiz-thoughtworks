
const fetch = require('node-fetch');

let count =0;

fetch('https://http-hunt.thoughtworks-labs.net/challenge/input', {
    method: 'GET',
    headers: {
        'userId': 'dYrpMiSPp'
    }
})
    .then(res => res.json())
    .then(data => {
        let today = new Date('2019-06-17');
        data.forEach((item, i) => {
            let startDate = new Date(item.startDate);
            if(item.endDate !== null){
                let endDate = new Date(item.endDate);
                if(startDate.getTime() < today.getTime() && endDate.getTime() > today.getTime()){
                    count++;
                }
            }else if(startDate.getTime() < today.getTime()){
                count++;
            }
        });

        const body = {
            "count":count
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
