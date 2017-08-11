var assert = require('assert');
var controller = require('../src/server/controller');

describe('Testing Combination Generator', () => {
	
	it('Triangle with 2 levels', (done) => {
		const triangleArray = [[6],[3,5]];
		
		const result = controller.genCombinations(triangleArray);
		assert.equal(2, result.length);
		assert.deepEqual([0,0], result[0]);
		assert.deepEqual([0,1], result[1]);
		done();
	});

	it('Triangle with 3 levels', (done) => {
		const triangleArray = [[6],[3,5], [9,7,1]];
		
		const result = controller.genCombinations(triangleArray);
		assert.equal(4, result.length);
		assert.deepEqual([0,0,0], result[0]);
		assert.deepEqual([0,0,1], result[1]);
		assert.deepEqual([0,1,1], result[2]);
		assert.deepEqual([0,1,2], result[3]);
		done();
	});

	it('Triangle with 4 levels', (done) => {
		const triangleArray = [[6],[3,5], [9,7,1], [4,6,8,4]];
		
		const result = controller.genCombinations(triangleArray);

		assert.equal(8, result.length);
		assert.deepEqual([0,0,0,0], result[0]);
		assert.deepEqual([0,0,0,1], result[1]);
		assert.deepEqual([0,0,1,1], result[2]);
		assert.deepEqual([0,0,1,2], result[3]);
		assert.deepEqual([0,1,1,1], result[4]);
		assert.deepEqual([0,1,1,2], result[5]);
		assert.deepEqual([0,1,2,2], result[6]);
		assert.deepEqual([0,1,2,3], result[7]);
		done();
	});

});
