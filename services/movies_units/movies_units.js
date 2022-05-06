const Movies_UnitsController = require("../../controllers/movies_units");
const Joi = require("joi");
const jwt = require("jsonwebtoken");


const actionSchema = Joi.object({
  action: Joi.string().required()
});

const movies_Units = async (req, res) => {
  const { error, value } = actionSchema.validate(req.body);

  if (error) {
    return res.status(400).send(error);
  }
  const { action: actionBody } = req.body;

  const token = req.headers.authorization.split(" ")[1];
  const {email} =  jwt.verify(token, "t3st4nd0");
  
  let action

  try{
  if(actionBody == "rent"){
    
    action = await Movies_UnitsController.rentMovie(req.params.id, email);
  }
  else if(actionBody == "return"){
    action = await Movies_UnitsController.returnMovie(req.params.id);
  }

  return res.status(200).send({
    success: true,
  });
  }catch(err){

  }

}

module.exports = movies_Units;