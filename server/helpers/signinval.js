import Joi from '@hapi/joi';

const signinVal = (curEmployee) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  return schema.validate(curEmployee);
};
export default signinVal;
