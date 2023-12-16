/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const srcSet = new Set();
  const dests = [];
  for (const [src, dest] of paths) {
    srcSet.add(src);
    dests.push(dest);
  }
  for (const dest of dests) {
    if (!srcSet.has(dest)) {
      return dest
    }
  }
};


console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))