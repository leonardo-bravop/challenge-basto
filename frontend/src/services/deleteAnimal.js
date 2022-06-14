import axios from "axios";
import getAnimals from "./animalServices";

const deleteAnimal = (setAnimals, searchValue, _id, active) => {
  return axios
    .delete(`/api/animal/delete?_id=${_id}`)
    .then(() => {
      if (searchValue.value) {
        axios
          .get(`/api/animal/search?senasaId=${_id}`)
          .then(({ data }) => setAnimals(data));
      } else {
        getAnimals(setAnimals, active);
      }
    });
};

export default deleteAnimal;
