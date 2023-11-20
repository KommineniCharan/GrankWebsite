const AddtocartsecuModel = require("../models/addtocartsecu.model");

class addtocartsecuCtrl {
  static createAddtocart(req, res) {
    const addtocart = req.body;
    if (req.files) {
      addtocart.images = req.files.map((file) => `addtocart/${file.filename}`); // give path to store images
    }
    new AddtocartsecuModel(addtocart)
      .save()
      .then((result) => {
        res.status(201).send({ message: "cart added", data: result });
      })
      .catch((err) => {
        res.status(500).send({ message: "cart Not added", error: err });
      });
  } //createAddtocart
  static updateAddtocart(req, res) {
    const addtocart = req.body;
    const { id } = req.params;
    AddtocartsecuModel.findOneAndUpdate({ _id: id }, addtocart, { new: true })
      .then((result) => {
        res.status(200).send({ message: "cart is updated", data: result });
      })
      .catch((err) => {
        res.status(404).send({ message: "could not updated cart", error: err });
      });
  } //updateAddtocart
  static deleteAddtocart(req, res) {
    const { id } = req.params;
    AddtocartsecuModel.findOneAndDelete({ _id: id })
      .then((result) => {
        res.status(200).send({ message: "cart is deleted", data: result });
      })
      .catch((err) => {
        res.status(404).send({ message: "could not deleted cart", error: err });
      });
  } //deleteAddtocart
  static getOneAddtocart(req, res) {
    const { id } = req.params;
    // const { category } = req.params;
    AddtocartsecuModel.findOne({ _id: id })
      .then((result) => {
        res.status(200).send({ message: "cart details", data: result });
      })
      .catch((err) => {
        res
          .status(404)
          .send({ message: "could not get cart details", error: err });
      });
  } //getoneAddtocart
  static getAllAddtocart(req, res) {
    AddtocartsecuModel.find()
      .then((result) => {
        res.status(200).send({ message: "cart details", data: result });
      })
      .catch((err) => {
        res
          .status(404)
          .send({ message: "could not get cart details", error: err });
      });
  } //getallAddtocart
}

module.exports = addtocartsecuCtrl;
