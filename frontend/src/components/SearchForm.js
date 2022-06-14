import React from "react";
import { Button } from "react-bootstrap";
import getAnimals from "../services/animalServices";
import searchAnimal from "../services/searchAnimal";
import "./SearchForm.css";

const SearchForm = ({ setAnimals, searchValue, setPages, setActive }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.value.trim())
      searchAnimal(setAnimals, searchValue.value.trim(), setPages, setActive);
    else getAnimals(setAnimals, 1, setPages);
  };
  return (
    <div>
      <form className="searchForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="searchInput">SENASA ID</label>
        </div>
        <div className="inputContainer">
          <input
            type="text"
            id="searchInput"
            className="searchInput"
            {...searchValue}
          />
          <Button variant="success" type="submit">
            Buscar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
