// /* eslint-disable class-methods-use-this */
import ArraySchema from './ArraySchema.js';
import NumberSchema from './NumberSchema.js';
// import ObjectSchema from './ObjectSchema.js';

export default class Validator {
  number() {
    return new NumberSchema();
  }

  array() {
    return new ArraySchema();
  }

//   object() {
//     return new ObjectSchema();
//   }
}

// const v = new Validator();
// const schema = v.number();

// console.log(schema.isValid('Hexlet'));
// console.log(schema.isValid(''));
// console.log(schema.isValid(null));
// console.log(schema.isValid(123));
