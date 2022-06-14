import axios from "axios";

const getAnimals = (setAnimals, page=1, setPages) => {
  return axios
    .get(`/api/animal/get?page=${page}&limit=8`)
    .then(({ data }) => {
      setAnimals(data.results)
      if(setPages) {
        const pagesArray = []
        for(let number = 1; number <= data.pages; number++) {
          pagesArray.push(number)
        }
        setPages(pagesArray)}
    })
    .catch((error) => console.error(error));
};

export default getAnimals