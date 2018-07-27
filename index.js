
const quotes = require('./quotes')

exports.randomQuote = () => {
	var item = quotes[Math.floor(Math.random()*quotes.length)];
	return `${item[0]} \n~${item[1]}`
}
