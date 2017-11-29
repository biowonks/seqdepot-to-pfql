'use strict'

const bunyan = require('bunyan')

const log = bunyan.createLogger({
	name: 'seqdepot2PFQL'
})

/**
 * parseDas_ private method makes DAS output from SeqDepot compatible with PFQL.
 * This alters the input and produces no return
 * 
 * @param {any} input
 */
const parseDas_ = (input) => {
	for (let i = 0; i < input.t.das.length; i++)
		input.t.das[i] = ['TM'].concat(input.t.das[i])
	console.log(input.t.das)
}

module.exports = (input) => {
	if (input.t.das)
		parseDas_(input)
	return input
}
