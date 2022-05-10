const Movies_UnitsController = require("../../controllers/movies_units");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const UsersController = require("../../controllers/users");


const actionSchema = Joi.object({
  action: Joi.string().required()
});

const movies_Units = async (req, res) => {
  const { error, value } = actionSchema.validate(req.body);

  if (error) {
    return res.status(400).send(error);
  }
  const { action: actionBody } = req.body;

  const verify = await Movies_UnitsController.verifyMovie(req.params.id);
  
  if(!verify){
    return res.status(400).send({message:"Invalid Movie Unit"});
  }

  const token = req.headers.authorization.split(" ")[1];
  const {email} =  jwt.verify(token, "t3st4nd0");

  const user = await  UsersController.getUser(email);
  const userId = user._id.toString();

  let action

  try{
 if( actionBody == "rent"){
    if(verify.userId){
      return res.status(401).send({message:"Unauthorized"});
    }
    action = await Movies_UnitsController.rentMovie(req.params.id, userId);
  }
  else if(actionBody == "return"){
    if(verify.userId !== userId){
      return res.status(401).send({message:"Unauthorized"});
    }
    action = await Movies_UnitsController.returnMovie(req.params.id);
  }

  return res.status(200).send({
    success: true,
  });
  }catch(err){
    return res.status(400).send(err);
  }

}

module.exports = movies_Units;