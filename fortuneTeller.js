
let fortunes = {
    'You will' : ['make money', 'die', 'find what you are looking for'],
    'You should' : ['do that thing', 'not go there anymore', 'go there more often'],
    'You have to' : ['forgive', 'forget', 'remember']
};

const getFortune = potentialFortunes => {
    let 
};

let userInput = window.prompt('Would you like to hear your fortune? (Y/N)');
if( userInput === 'Y'){
    console.log(getFortune(fortunes));
} else {
    console.log('Oh! Ok then. Bye!');
}