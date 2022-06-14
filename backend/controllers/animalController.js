const Animal = require("../models/animalModel");

exports.create = (req, res, next) => {
  const { senasaId, type, weight, cattleRanch, device, deviceNumber } =
    req.body;

  Animal.create({ senasaId, type, weight, cattleRanch, device, deviceNumber })
    .then((newAnimal) => {
      res.send(newAnimal).status(201);
    })
    .catch((error) => {
      next(error);
    });
};

exports.get = (req, res, next) => {
  const { page = 1, limit = 10 } = req.query;
  let count;
  Animal.count()
    .then((number) => {
      count = number;
      return Animal.find()
        .sort({ updatedAt: -1 })
        .limit(limit * 1)
        .skip((page - 1) * limit);
    })
    .then((results) => {
      res.send({ results, pages: Math.ceil(count / limit) });
    })
    .catch((error) => {
      next(error);
    });
};

exports.edit = (req, res, next) => {
  const { _id } = req.query;

  const { senasaId, type, weight, cattleRanch, device, deviceNumber } =
    req.body;


  Animal.findByIdAndUpdate(
    { _id },
    { senasaId, type, weight, cattleRanch, device, deviceNumber },
    { new: true }
  )
    .then((updatedAnimal) => {
      res.send(updatedAnimal);
    })
    .catch((error) => {
      next(error);
    });
};

exports.searchBySenasaId = (req, res, next) => {
  const { senasaId } = req.query;
  if (/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]){16}$/.test(senasaId)) {
    Animal.find({ senasaId })
      .then((foundAnimals) => {
        if (foundAnimals) res.send(foundAnimals);
        else res.send("No animal found for this SENASA ID");
      })
      .catch((error) => {
        res.status(400);
        next(new Error(error));
      });
  } else {
    res.status(400);
    next(new Error("Please provide a valid SENASA ID"));
  }
};

exports.delete = (req, res, next) => {
  const { _id } = req.query;
  if (_id) {
    Animal.deleteOne({ _id }).then(() => {
      res.sendStatus(200);
    });
  }
};
