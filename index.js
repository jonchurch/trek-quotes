
const quotes = require('./quotes')

exports.randomQuote = () => {
	var item = quotes[Math.floor(Math.random()*quotes.length)];
	console.log({item})

	return `${item[0]} \n~${item[1]}`
}
