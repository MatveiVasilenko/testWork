// Инициализация wow.js
let wow = new WOW({
	mobile: false
})
console.log(wow)
wow.init()

const reserve = {
	name: 'Ns'
}
// Инициализация wow.js
const grid = document.querySelector('.grid')
const [...btns] = document.querySelectorAll('button')

let iso = new Isotope(grid, {
	itemSelector: '.grid-item',
 	layoutMode: 'fitRows'
})

for (let btn of btns) {
	btn.onclick = function () {
		let selector = btn.getAttribute('data-filter')
		console.log(selector)
		iso.arrange({
			filter: selector
		})
	}
}
