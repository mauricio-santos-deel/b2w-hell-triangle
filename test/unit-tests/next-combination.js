var assert = require('assert');
var controller = require('../../src/server/controller');

describe('Next combination calculator', () => {
	
	it('Triangle with 2 levels, previous combination: [0,0]', (done) => {
		const combination = [0,0];
		
		const result = controller.getNextCombination(combination, 2);
		assert.equal(2, result.length);
		assert.deepEqual([0,1], result);
		done();
	});

	it('Triangle with 3 levels, previous combination: [0,0,1]', (done) => {
		const combination = [0,0,1];
		
		const result = controller.getNextCombination(combination, 3);
		assert.equal(3, result.length);
		assert.deepEqual([0,1,1], result);
		done();
	});

	it('Triangle with 3 levels, previous combination: [0,1,2]', (done) => {
		// this is the last combination of a triangle of 3 'levels'
		const combination = [0,1,2];
		
		const result = controller.getNextCombination(combination, 3);
		assert.equal(null, result);
		done();
	});

	it('Triangle with 4 levels, previous combination: [0,1,1,1]', (done) => {
		const combination = [0,1,1,1];
		
		const result = controller.getNextCombination(combination, 4);
		assert.equal(4, result.length);
		assert.deepEqual([0,1,1,2], result);
		done();
	});

	it('Triangle with 4 levels, previous combination: [0,1,2,2]', (done) => {
		const combination = [0,1,2,2];
		
		const result = controller.getNextCombination(combination, 4);
		assert.equal(4, result.length);
		assert.deepEqual([0,1,2,3], result);
		done();
	});

	it('Triangle with 4 levels, previous combination: [0,1,2,3]', (done) => {
		// this is the last combination of a triangle of 3 'levels'
		const combination = [0,1,2,3];
		
		const result = controller.getNextCombination(combination, 4);
		assert.equal(null, result);
		done();
	});

	it('Triangle with 4 levels, INVALID combination: [0,1,2,4]', (done) => {
		// this is the last combination of a triangle of 3 'levels'
		const combination = [0,1,2,4];
		
		const result = controller.getNextCombination(combination, 4);
		assert.equal(null, result);
		done();
	});

});
