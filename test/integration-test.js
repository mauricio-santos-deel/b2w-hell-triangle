// Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const expect = chai.expect;
const should = chai.should();

chai.use(chaiHttp);

describe('Requesting Hell Triangle Server Test: ', () => {
	
	it('It should return the result for hell triangle: [[6],[3,5],[9,7,1],[4,6,8,4]]', (done) => {
		chai.request(server)
		.post('/api/hell/result')
		.send({ triangleArray: [[6],[3,5],[9,7,1],[4,6,8,4]] })
		.end((err, res) => {
			res.should.have.status(200);

			const expectedResult = {
				greaterCombos: [[0,1,1,2]],
				greaterResult: 26
			};

			expect(res.body.result).to.deep.equal(expectedResult);
			done();
		});
	});

});