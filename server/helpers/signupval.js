import Joi from '@hapi/joi';

const signupValidation = (newEmployee) => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    gender: Joi.string().required(),
    department: Joi.string().required(),
    address: Joi.string().required(),
  });
  return schema.validate(newEmployee);
};
export default signupValidation;
