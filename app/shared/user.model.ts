const validator = require("email-validator");

export class User {
  firstName: string;
    lastName: string;
    email: string;
    password: string;
    city: string;
    county: string;
    state: string;
  isValidEmail() {
    return validator.validate(this.email);
  }
}