const Movies_UnitsController = require("../../controllers/movies");
const Joi = require("joi");

const actionSchema = Joi.object({
  action: Joi.string().required()
});

const movies_Units = async (req, res) => {
  const { error, value } = actionSchema.validate(req.body);

  if (error) {
    return res.status(400).send(error);
  }
  console.log(req.body);
  const { teste } = req.body;
  console.log(teste);
  let action;

  /*if(actionBody == "rent"){
    action = await Movies_UnitsController.rentMovie(req.params.id);
  }
  else if(actionBody == "return"){
    action = await Movies_UnitsController.returnMovie(req.params.id);
  }*/

  
  
}

module.exports = movies_Units;