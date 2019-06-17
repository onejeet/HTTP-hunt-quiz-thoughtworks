
const fetch = require('node-fetch');

let active = [];
let activeCategories = {};

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
                    active.push(item);
                }
            }else if(startDate.getTime() < today.getTime()){
                active.push(item);
            }
        });


        active.forEach((item, i) => {
                if(Object.keys(activeCategories).indexOf(item.category) < 0){
                    activeCategories[item.category] = 1 ;
                }else{
                    activeCategories[item.category]++;
                }
        });

        const body = activeCategories;
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
