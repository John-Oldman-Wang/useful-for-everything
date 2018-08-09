
/**
 * A function to concat Array to a array of item which is not array for arrays.
 *
 * example 
 *  concat([0],[1],[2]) => [0,1,2]
 *  concat([0,[1]],[2],[[3]]) => [0,1,2,3]
 *  concat([0,[1]],[2],3) => [0,1,2,3]
 * @private
 * @param {Array} [args] The arguments array.
 * @returns {Array} Returns `array of isnotarray`.
 */
function concat(...args) {
  var arr = [];
  args.forEach(item => {
    if (Array.isArray(item)) {
      return arr.push(...concat(...item));
    }
    arr.push(item);
  });
  return arr;
}

export default concat