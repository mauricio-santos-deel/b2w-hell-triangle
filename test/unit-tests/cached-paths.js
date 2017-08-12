var assert = require('assert');
var controller = require('../../src/server/controller');

describe('Hell Triangle Cached Paths', () => {
	
	it('This should cache the path for a 2 height triangle', (done) => {
		// 2 height triangle
		const triangleArray = [[6], [3,5]];
		
		// generate result and force caching of the possible paths for a 5 height triangle
		controller.getResult(triangleArray);
		
		assert.deepEqual(controller.cachedPaths.height2, [[0,0],[0,1]]);

		done();
	});

});
