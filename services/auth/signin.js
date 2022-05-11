const Joi = require("joi");
const AuthController = require("../../controllers/auth");

const signinSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .regex(/^(?=.*\d).{4,16}$/)
    .required(),
});

const signin = async (req, res) => {
  const { error, value } = signinSchema.validate(req.body);

  if (error) {
    return res.status(400).send(error);
  }

  try {
    const token = await AuthController.signin(req.body);

    return res.status(200).send({
      token,
    });
  } catch (err) {
    return res.status(400).send({message:"Invalid Email or Password"});
  }
};

module.exports = signin;
