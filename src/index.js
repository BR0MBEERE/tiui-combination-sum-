/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @return {number[][]}
 */

const combinationSumRecursive = (
  candidates,
  remainingSum,
  finalCombinations,
  currentCombination
) => {
  if (remainingSum == 0) {
    finalCombinations.push(currentCombination);
    return;
  }
  if (remainingSum <= 0) return;
  for (let i = 0; i < candidates.length; i++) {
    combinationSumRecursive(
      candidates.slice(i),
      remainingSum - candidates[i],
      finalCombinations,
      [...currentCombination, candidates[i]]
    );
  }
};

/**
 * Backtracking algorithm of finding all possible combination for specific sum.
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  const res = [];
  combinationSumRecursive(candidates, target, res, []);
  return res;
};

module.exports = combinationSum;
