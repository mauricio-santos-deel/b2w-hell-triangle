/* global exports */

/**
 * Variable that will store the already calculated paths.
 */
const cachedPaths = {};
cachedPaths.height3 = [
	[0,0,0],
	[0,0,1],
	[0,1,1],
	[0,1,2],
];
cachedPaths.height4 = [
	[0,0,0,0],
	[0,0,0,1],
	[0,0,1,1],
	[0,0,1,2],
	[0,1,1,1],
	[0,1,1,2],
	[0,1,2,2],
	[0,1,2,3]
];

/**
 * function that will be called by the route layer
 * @param  {Object} req The HTTP Request
 * @param  {Object} res The HTTP Response
 * @return {void}
 */
exports.calculateResult = function(req, res) {
	var triangleArray = req.body.triangleArray;

	res.json({ result: getResult(triangleArray) });
};

/**
 * Function that will handle all the result calculation
 * @param  {Array} triangleArray Arrays of arrays representing the hell triangle
 * @return {Object} Object with tow fields:
 *                         greaterCombos: an array of the combination(s) that resulted the bigger sum
 *                         greaterResult: an integer with the result of the bigger sum found
 */
function getResult(triangleArray) {

	var combos;

	// generate all possible path combinations in the given hell triangle
	if (cachedPaths['height' + triangleArray.length]) {
		combos = cachedPaths['height' + triangleArray.length];
	} else {
		combos = genCombinations(triangleArray);
		cachedPaths['height' + triangleArray.length] = combos.slice();
	}

	// initialize variables that will store the result
	var greaterCombos = [];
	var greaterResult = 0;
	greaterCombos.push(combos[0]);
	greaterResult = getComboSum(combos[0], triangleArray);

	// check the sum result for each path combination
	for (let i = 1; i <= combos.length - 1; i++) {
		var comboSum = getComboSum(combos[i], triangleArray);

		if (comboSum > greaterResult) {
			greaterCombos = [combos[i]];
			greaterResult = comboSum;
		} else if (comboSum === greaterResult) {
			greaterCombos.push(combos[i]);
		}
	}

	return { greaterCombos: greaterCombos, greaterResult: greaterResult };
}

/**
 * Function that will calculate all paths possible in a hell triangle
 * @param  {Array} triangleArray Arrays of arrays representing the hell triangle
 * @return {Array} Array of arrays. Each array will represent one possible path of the hell triangle.
 */
function genCombinations(triangleArray) {
	const ret = [];

	// create first combination
	// all first combination are suposed to be an array of zeros in the size of the triangle height
	// eg: triangle: [[6],[5,3]] firstCombo: [0,0] that wil point to 6->5
	var combo = [];
	for (let i = 0; i < triangleArray.length; i++) {
		combo.push(0);
	}
	ret.push(combo);

	// the number of possible path combinations is equal: 2^(triangleHeight-1)
	var possibleCombinations = Math.pow(2, (triangleArray.length - 1));
	for (let i = 1; i < possibleCombinations; i++) {
		combo = getNextCombination(combo, combo.length);
		ret.push(combo);
	}

	return ret;
}

/**
 * Recursive function that will calculate the next path combination based on a previous combination.
 * @param  {Array}  combo     The previous combination
 * @param  {Number} comboSize The number of 'nodes' that a combination must have.
 * @return {Array}  Array of numbers representing the next path combination.
 */
function getNextCombination(combo, comboSize) {
	// check if should calculate next position of 'parent node'
	if (combo[combo.length - 1] === combo[combo.length - 2] + 1) {
		return getNextCombination(combo.slice(0, combo.length - 1), comboSize);
	}

	// copy combo array
	var nextCombo = combo.slice(0, combo.length);

	// calculate new position
	var newPos = combo[combo.length - 1] + 1;

	// validate invalid combo
	if (newPos > comboSize - 1) {
		return null;
	}

	// set new position into array
	nextCombo[combo.length - 1] = newPos;

	// fill in array with first position until it expected size
	while (nextCombo.length <= comboSize - 1) {
		nextCombo.push(nextCombo[nextCombo.length - 1]);
	}

	return nextCombo[0] === 1 ? null : nextCombo;
}

/**
 * Function that will calculate the result of a combination path of the hell triangle.
 * @param  {Array} combo 		  The path combination
 * @param  {Array} triangleArray  Arrays of arrays representing the hell triangle
 * @return {Number}               The sum result of the path combination in the hell triangle
 */
function getComboSum(combo, triangleArray) {
	var ret = 0;

	for (let i = 0; i < triangleArray.length; i++) {
		ret = ret + triangleArray[i][combo[i]];
	}

	return ret;
}

/* Exporting for unit testing purpose*/
exports.getResult = getResult;
exports.genCombinations = genCombinations;
exports.getNextCombination = getNextCombination;
exports.getComboSum = getComboSum;
exports.cachedPaths = cachedPaths;
