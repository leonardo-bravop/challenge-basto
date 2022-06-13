const mongoose = require("mongoose");

const animalSchema = mongoose.Schema(
  {
    senasaId: {
      type: String,
      required: true,
      match: [/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]){16}$/, "Please provide a valid SENASA ID"],
    },
    type: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          value = value.toLowerCase();
          return (
            value === "novillo" || value === "toro" || value === "vaquillona"
          );
        },
        message: (props) => `Please provide a valid animal type`,
      },
    },
    weight: {
      type: Number,
      required: true,
    },
    cattleRanch: {
      type: String,
      required: true,
    },
    device: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          value = value.toLowerCase();
          return value === "collar" || value === "caravana";
        },
        message: (props) => `Please provide a valid animal type`,
      },
    },
    deviceNumber: {
      type: String,
      required: true,
      match: [/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]){8}$/, "Please provide a valid device number"],
    },
  },
  {
    timestamps: true,
  }
);

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;
