
let fortunes = {
    'You will' : ['make money', 'die', 'find what you are looking for'],
    'You should' : ['do that thing', 'not go there anymore', 'go there more often'],
    'You have to' : ['forgive', 'forget', 'remember']
};

const getFortune = potentialFortunes => {
    let keys = Object.keys( potentialFortunes );
    let part1 = keys[Math.floor(Math.random() * keys.length)];
    let values = potentialFortunes[part1];
    let part2 = values[Math.floor(Math.random() * values.length)];
    return part1 + ' ' + part2;
};

console.log( getFortune( fortunes )) ;