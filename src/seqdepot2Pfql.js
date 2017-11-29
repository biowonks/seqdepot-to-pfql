'use strict'

const bunyan = require('bunyan')

const log = bunyan.createLogger({
	name: 'seqdepot2PFQL'
})

const parseDas = (input) => {
	for (let i = 0; i < input.t.das.length; i++)
		input.t.das[i] = ['TM'].concat(input.t.das[i])
	console.log(input.t.das)
}

module.exports = (input) => {
	if (input.t.das)
		parseDas(input)
	return input
}
