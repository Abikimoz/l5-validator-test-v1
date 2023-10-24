export default class NumberSchema {
    validators = [(value) => typeof value === 'number'];

    isValid(value) {
    //   return this.validators.every((validator) => validator(value) === true);

      const validations = this.validators.map((validator) => validator(value));
      return !validations.includes(false);
    }

    even() {
      const validator = (value) => value % 2 === 0;
      this.validators.push(validator);
      return this;
    }

    odd() {
      const validator = (value) => value % 2 !== 0;
      this.validators.push(validator);
      return this;
    }
//   }

// export default class NumberSchema {
    // isValid(value) {
        // return typeof value === 'number';
    // }
}
