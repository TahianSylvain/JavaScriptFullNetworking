// async code runs in parallel, it's to say running many codes at same time
// i.e: setTimeout() accepts a func and a number of milliseconds after exec 

const waiting = 20 
const callBackFunc = () => console.log("Be present where u're")

console.log('Shop')
setTimeout(callBackFunc, waiting)
console.log('Cook')
console.log('Eat')
console.log('Clean')
