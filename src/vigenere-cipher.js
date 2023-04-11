const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

/*
- If at least one of parameters has not been given, an Error with message Incorrect arguments! must be thrown
- The text returned by these methods must be uppercase
- Machines encrypt and decrypt only latin alphabet (all other symbols remain unchanged)

*/
class VigenereCipheringMachine {
  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor(reverse = true) {
    this.reverse = reverse;
  }

  encrypt(message, key) {
    
    if (arguments.length < 2 || [...arguments].some(el => Boolean(el) === false)) {
      throw new Error('Incorrect arguments!');
    } else {
      let res = [];
      //собираем индексы элементов не попадающих под кодировку
      let indexArray = message.split('').reduce((acc, cur, i) => {
        if (cur.match(/[^A-Z]/i)) {
          acc.push(i)
        }
        return acc;
      }, []);

      let mesUpReg = message.toUpperCase().replace(/[^A-Z]/gi, ''); //убираем все лишние символы
      let k = ''; //переменная для сборки ключа
      let count = Math.ceil(mesUpReg.length / key.length); //количество повторений ключа
      for (let i = 0; i < count; i++) {
        k += key;
      }
      k = k.substring(0, mesUpReg.length).toUpperCase();
      
      //кодируем
      for (let i = 0; i < mesUpReg.length; i++) {
        let alphabetIndex = (this.alphabet.indexOf(mesUpReg[i]) + this.alphabet.indexOf(k[i])) % this.alphabet.length;
        res.push(this.alphabet[alphabetIndex])
      }

      //возвращаем на места элементы не попадающие под кодировку
      indexArray.forEach(element => {
        res.splice(element, 0, message[element])
      });

      return !this.reverse ? res.reverse().join('') : res.join('');
    } 
  }
  decrypt(encryptedMessage, key) {
    
    if (arguments.length < 2 || [...arguments].some(el => Boolean(el) === false)) {
      throw new Error('Incorrect arguments!');
    } else {
      let res = [];
      //собираем индексы элементов не попадающих под кодировку
      let indexArray = encryptedMessage.split('').reduce((acc, cur, i) => {
        if (cur.match(/[^A-Z]/i)) {
          acc.push(i)
        }
        return acc;
      }, []);

      let mesUpReg = encryptedMessage.toUpperCase().replace(/[^A-Z]/gi, ''); //убираем все лишние символы
      let k = ''; //переменная для сборки ключа
      let count = Math.ceil(mesUpReg.length / key.length); //количество повторений ключа
      for (let i = 0; i < count; i++) {
        k += key;
      }
      k = k.substring(0, mesUpReg.length).toUpperCase();

      //кодируем
      for (let i = 0; i < mesUpReg.length; i++) {
        let alphabetIndex = (this.alphabet.indexOf(mesUpReg[i]) - this.alphabet.indexOf(k[i]) + this.alphabet.length) % this.alphabet.length;
        res.push(this.alphabet[alphabetIndex])
      }

      //возвращаем на места элементы не попадающие под кодировку
      indexArray.forEach(element => {
        res.splice(element, 0, encryptedMessage[element])
      });

      return !this.reverse ? res.reverse().join('') : res.join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};