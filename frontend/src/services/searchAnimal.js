import axios from "axios";

const searchAnimal = (setAnimals, searchValue, setPages, setActive) => {
  return axios
    .get(`/api/animal/search?senasaId=${searchValue}`)
    .then(({ data }) => {
      setPages([1]);
      setActive(1)
      setAnimals(data);
    });
};

export default searchAnimal;
