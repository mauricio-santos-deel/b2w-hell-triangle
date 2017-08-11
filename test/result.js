var assert = require('assert');
var controller = require('../src/server/controller');

describe('Hell Triangle Result', () => {
	
	it('Triangle with 2 levels', (done) => {
		const triangleArray = [[6], [3,5]];
		
		const expectedResult = {
			greaterCombos: [[0,1]] ,
			greaterResult: 11
		}

		const result = controller.getResult(triangleArray);
		
		assert.deepEqual(expectedResult, result);

		done();
	});

	it('Triangle with 3 levels', (done) => {
		const triangleArray = [[6], [3,5], [9,7,1]];
		
		const expectedResult = {
			greaterCombos: [[0,0,0],[0,1,1]] ,
			greaterResult: 18
		}

		const result = controller.getResult(triangleArray);
		
		assert.deepEqual(expectedResult, result);

		done();
	});

	it('Triangle with 4 levels', (done) => {
		const triangleArray = [[6], [3,5], [9,7,1], [4,6,8,4]];
		
		const expectedResult = {
			greaterCombos: [[0,1,1,2]] ,
			greaterResult: 26
		}

		const result = controller.getResult(triangleArray);
		
		assert.deepEqual(expectedResult, result);

		done();
	});

});