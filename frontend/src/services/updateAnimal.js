import axios from "axios";
import getAnimals from "./animalServices";

const updateAnimal = (_id, setAnimals, editedAnimal, active) => {
  return axios.put(`/api/animal/edit?_id=${_id}`, editedAnimal).then(({data}) => {
    getAnimals(setAnimals, active);
  });
};

export default updateAnimal;
