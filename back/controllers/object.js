const Object = require("../models/object");
const User = require("../models/user");

//afficher tout les objects
exports.afficher = async (req, res) => {
  try {
    let objects = await Object.find();
    res.status(200).json(objects);
  } catch (err) {
    res.status(400).json(err);
  }
};

//cree un object
exports.create = async (req, res) => {
  try {
    let user = await User.findById(req.payload.id);
    let object = await Object.create(req.body);
    user.object.push(object);
    await user.save();
    res.status(201).json(object);
  } catch (err) {
    res.status(400).json(err);
  }
};

//afficher un object precis
exports.afficherid = async (req, res) => {
  try {
    let { id } = req.params;
    let object = await Object.findById(id);
    res.status(200).json(object);
  } catch (err) {
    res.status(400).json(err);
  }
};

//modification de l'object
exports.modif = async (req, res) => {
  try {
    let { id } = req.params;
    let object = await Object.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(object);
  } catch (err) {
    res.status(400).json(err);
  }
};

//suppretion object de la DB object et de la liste de l'user
exports.supp = async (req, res) => {
  try {
    let { id } = req.params;
    let object = await Object.findByIdAndDelete(id);
    let user = await User.findById(req.payload.id);
    user.object = user.object.filter((item) => item != id);
    await user.save();
    res.status(200).json(Object);
  } catch (err) {
    res.status(400).json(err);
  }
};