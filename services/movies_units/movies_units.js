const Movies_UnitsController = require("../../controllers/movies_units");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const UsersController = require("../../controllers/users");
const ApiError = require("../../utils/apiError");


const actionSchema = Joi.object({
  action: Joi.string().required()
});

const route = async (req, res) => {
  const { error, value } = actionSchema.validate(req.body);

  if (error) {
    return res.status(400).send(error);
  }
  const { action: actionBody } = req.body;

  const verify = await Movies_UnitsController.verifyMovie(req.params.id);
  

  if(!verify){
    throw ApiError.badRequest("Invalid Movie Unit", {});
  }

  const token = req.headers.authorization.split(" ")[1];
  const {email} =  req.user;

  const user = await  UsersController.getUser(email);
  const userId = user._id.toString();

  let action

 if( actionBody == "rent"){
    if(verify.userId){
      throw ApiError.Unauthorized("Unauthorized", {});
    }
    action = await Movies_UnitsController.rentMovie(req.params.id, userId);
  }
  else if(actionBody == "return"){
    if(verify.userId !== userId){
      throw ApiError.Unauthorized("Unauthorized", {});
    }
    action = await Movies_UnitsController.returnMovie(req.params.id);
  }

  return res.status(200).send({
    success: true,
  });

}

module.exports = {route, actionSchema};