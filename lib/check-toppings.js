'use strict'

const isTopping = require('./is-topping')

module.exports = topping => topping.filter(t => isTopping(t))
