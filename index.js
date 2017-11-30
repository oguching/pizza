'use strict'

const sizes = require('./helpers/sizes')
const toppings = require('./helpers/toppings')
const checkToppings = require('./lib/check-toppings')
const isSize = require('./lib/is-size')
const heatPizza = require('./lib/heat-pizza')

module.exports = async ({ size = 'small', topping = [] } = {}) => {
	const pizzas = checkToppings(topping).length

	if (!isSize(size)) {
		const sizesList = sizes.join(', ')
		throw new Error(`Choose one of these sizes: ${sizesList}`)
	}

	if (pizzas <= 0) {
		const toppingsList = toppings.join(', ')
		throw new Error(`Choose one of these toppings: ${toppingsList}`)
	}

	await heatPizza(pizzas)

	return `Your ${pizzas} ${size} ${checkToppings(topping).length > 1
		? 'pizzas are'
		: 'pizza is'} ready! ${checkToppings(topping).join(', ')}`
}