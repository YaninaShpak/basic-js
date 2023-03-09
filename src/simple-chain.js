const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.str.length;
  },

  addLink(value) {
    if (arguments.length > 0) {
      if (!this.str) {
        this.str = [`( ${value} )`];
      } else {
        this.str.push(`( ${value} )`);
      }
    } else {
      this.str = [`(  )`];
    }
    
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || position > this.getLength() || position < 1) {
      this.str = [];
      throw new Error('You can\'t remove incorrect link!');
    } else {
      this.str.splice(position - 1, 1);
      return this;
    }
  },

  reverseChain() {
    this.str.reverse();
    return this;
  },

  finishChain() {
    let x = this.str.join('~~');
    this.str = [];
    return x;
  }
};

module.exports = {
  chainMaker
};
