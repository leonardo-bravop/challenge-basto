import axios from "axios";
import getAnimals from "./animalServices";

const createAnimal = (setAnimals, newAnimal, active) => {
  return axios.post(`/api/animal/create`, newAnimal).then(({data}) => {
    getAnimals(setAnimals, active);
  });
};

export default createAnimal;
