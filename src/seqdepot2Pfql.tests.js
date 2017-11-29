/* eslint no-magic-numbers: 0 */
'use strict'

const expect = require('chai').expect

const seqdepot2Pfql = require('./seqdepot2Pfql')

describe('seqdepot2Pfql', function() {
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

		const output = seqdepot2Pfql(input)
		expect(output).eql(expected)
	})
})
