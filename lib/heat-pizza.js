'use strict'

const sleep = require('./sleep')

module.exports = async timer => {
	await sleep(1000 * timer)
	return true
}