const Joi = require("joi");
const AuthController = require("../../controllers/auth");

const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  password: Joi.string()
    .regex(/^(?=.*\d).{4,16}$/)
    .required(),
});

const signup = async (req, res) => {
  const { error, value } = signupSchema.validate(req.body);

  if (error) {
    return res.status(400).send(error);
  }

  const insertedId = await AuthController.signup(req.body);

  return res.status(200).send({
    success: insertedId,
  });
};

module.exports = signup;
