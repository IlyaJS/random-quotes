const quotes = [
	'The best way to predict the future is to invent it. - Alan Kay',
	'Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll',
	'The only way to do great work is to love what you do. - Steve Jobs',
	'Success is not how high you have climbed, but how you make a . - Roy T. Bennett',
	'What lies behind us and what lies before us are tiny matters . - Ralph Waldo Emerson',
	'Another queto mass effect is real good game and cuberpunk 2077 game year',
]

const quoteElement = document.getElementById('quote')
const generateBtn = document.getElementById('generate-btn')

function generateRandomQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length)
	const randomQuote = quotes[randomIndex]
	quoteElement.textContent = randomQuote
}

generateBtn.addEventListener('click', generateRandomQuote)
