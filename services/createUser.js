

//exports.hashPassword =


//will attempt to implement something like this...
/*
const {check, validationResult} = require('express-validator/check');
// example logic tied to 'register' in routing layer
import UserModel from '../dbs/UserModel';
//import CompanyModel from '../models/company';

export default class UserService() {

  async Signup(user) {
    console.log(user._firstName + user._lastName +  user._email + user._password );
    const userRecord = await UserModel.create(user);
    const companyRecord = await CompanyModel.create(userRecord); // needs userRecord to have the database id
    const salaryRecord = await SalaryModel.create(userRecord, companyRecord); // depends on user and company to be created

    ...whatever

    await EmailService.startSignupSequence(userRecord)

    ...do more stuff

    return { user: userRecord, company: companyRecord };
  }
}
*/
