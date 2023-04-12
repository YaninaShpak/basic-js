const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let newDomains = domains.map(el => el.split('.').reverse());

  let obj = newDomains.reduce((acc, cur, index) => {
    let concatCur = '';
    for (let i = 0; i < cur.length; i++) {
      concatCur = concatCur + `.${cur[i]}`
      
      if (acc[concatCur]) {
        acc[concatCur] = acc[concatCur] + 1;
      } else {
        acc[concatCur] = 1;
      }
    }

    return acc;
  }, {});

  return obj;
}

module.exports = {
  getDNSStats
};
