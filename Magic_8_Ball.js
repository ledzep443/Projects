//Generate a random number
const getRandomNumber = (num) => {
    return Math.floor(Math.random() * num)
};

const results = {
    question: ["Answer not clear, try again later", "Possible", "Very Likely", "Definate", "Not likely", "No"],
    luck: ['Good luck', 'Bad luck', 'OK luck'],
    future: ['Your future looks bright!', 'Your future is hazy, try again later.', 'Your future looks bleak.']
};

let magic8 = [];
//Generate random results for Magic 8
for (let prop in results) {
    let index = getRandomNumber(results[prop].length);

    switch(prop) {
        case 'question':
            magic8.push(`The answer to your question is: "${results[prop][index]}".`)
            break
        case 'luck':
            magic8.push(`You are having "${results[prop][index]}" right now.`)
            break
        case 'future':
            magic8.push(results[prop][index])
            break
        default:
            magic8.push("Not enough info at this time.")
    }
}
//Join the results into a single string
const returnResults = (newResults) => {
    const format = magic8.join(' ');
    console.log(format)
}
//Show the results in the console
returnResults(magic8);