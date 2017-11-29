/* eslint no-magic-numbers: 0 */
'use strict'

const expect = require('chai').expect

const seqdepot-to-pfql = require('./seqdepot-to-pfql')

describe('seqdepot-to-pfql', function() {
	it('should parse das correctly', function() {
		const input = {
			t: {
				das: [
					[22, 44, 34, 6.61, 5.95e-8],
					[229, 253, 239, 5.384, 4.498e-6]
				]
			}
		}

		const expected = {
			t: {
				das: [
					['TM', 22, 44, 34, 6.61, 5.95e-8],
					['TM', 229, 253, 239, 5.384, 4.498e-6]
				]
			}
		}

		const output = seqdepot-to-pfql(input)
		expect(output).eql(expected)
	})
})
