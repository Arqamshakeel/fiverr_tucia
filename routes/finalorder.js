var express = require("express");
var router = express.Router();
// const mongoose = require("mongoose");
var { FinalOrder } = require("../mongooseModels/model.finalorders");
const path = require("path");
const crypto = require("crypto");
const mongoose = require("mongoose");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
router.post("/finalorder/:c_id/:files_id", async (req, res) => {
  // C_Id: "",
  // F_Id: "",
  // service_Category: {},
  // total_price: "",
  // time: "",
  let c_id = req.params.c_id;
  let o_id = req.params.files_id;

  let finalOrder = new FinalOrder();
  finalOrder.C_Id = c_id;
  finalOrder.F_Id = o_id;
  finalOrder.service_Category = req.body.category;
  finalOrder.comments = req.body.additionalText;

  // console.log(req.body.additionalText);
  // console.log("c+id: " + c_id + " o_id: " + o_id);
  await finalOrder.save();
  return res.send();
});

module.exports = router;
