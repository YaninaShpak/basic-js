const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (Object.keys(options).length > 0) {
    let addArr = [];
    let newAddStr = '';
    let arr = [];
    
    if (options.hasOwnProperty('addition')) {
      let s = String(options.addition);

      if (!options.additionRepeatTimes) {
        addArr.push(s);
      } else {
        for (let i = 0; i < options.additionRepeatTimes; i++) {
          addArr.push(s);
        }
      }
      newAddStr = addArr.join(options.additionSeparator ? options.additionSeparator : '|');
    }

    if (!options.repeatTimes) {
      arr.push(str + newAddStr);
    } else {
      for (let i = 0; i < options.repeatTimes; i++) {
        arr.push(str + newAddStr);
      }
    }

    return arr.join(options.separator ? options.separator : '+');

  } else {
    return str;
  }
}

module.exports = {
  repeater
};
