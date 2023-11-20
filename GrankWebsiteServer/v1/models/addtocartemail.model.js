const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const addtocartemailSchema = new mongoose.Schema({
  // cartId: Number,

  name: String,
  discription: String,
  price: String,
  year: String,
});

// addtocartSchema.plugin(AutoIncrement, { inc_field: "cartId" });
module.exports = mongoose.model("Addtocartemail", addtocartemailSchema);
