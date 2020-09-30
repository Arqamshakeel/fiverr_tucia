var mongoose = require("mongoose");
const Joi = require("@hapi/joi"); //for validating data in mongoose

var finalOrder = mongoose.Schema({
  C_Id: "",
  F_Id: "",
  service_Category: {},
  total_price: "",
  time: "",
  comments: "",
});
var FinalOrder = mongoose.model("finalorders", finalOrder);

// function validateProduct(data) {
//   const schema = Joi.object({
//     name: Joi.string().min(3).max(100).required(),
//     price: Joi.number().min(0).required(),
//   });
//   return schema.validate(data, { abortEarly: false });
// }

module.exports.FinalOrder = FinalOrder;
// module.exports.validate = validateProduct;
