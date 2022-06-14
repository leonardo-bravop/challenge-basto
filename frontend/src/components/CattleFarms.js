import React, { useEffect, useState } from "react";
import AdminScreen from "./AdminScreen";
import SearchForm from "./SearchForm";
import "./CattleFarms.css";
import getAnimals from "../services/animalServices";
import Results from "../commons/Results";
import useInput from "../hooks/useInput";
import CreateModal from "../commons/CreateModal";
import { Pagination, Button } from "react-bootstrap";

const labelsArray = [
  "ID SENASA",
  "Tipo",
  "Peso (kg)",
  "Potrero",
  "Dispositivo",
  "Número de dispositivo",
  "Creación",
  "Actualización",
];

const CattleFarms = () => {
  const [animals, setAnimals] = useState([]);
  const [pages, setPages] = useState([]);
  const [active, setActive] = useState(1);
  const searchValue = useInput("");

  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  useEffect(() => {
    getAnimals(setAnimals, active, setPages);
  }, [active]);

  return (
    <div style={{ margin: "30px 80px" }}>
      <AdminScreen title={"Ganado"}>
        <CreateModal setResults={setAnimals} active={active} />
        <SearchForm
          setAnimals={setAnimals}
          setPages={setPages}
          searchValue={searchValue}
          active={active}
          setActive={setActive}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "30px 0",
            justifyContent: "space-between",
          }}
        >
          <span style={{ display: "inline-block" }}>Lista de Animales</span>
          <Button
            onClick={() => getAnimals(setAnimals, 1, setPages)}
            variant="outline-primary"
          >
            Ver todos
          </Button>
        </div>
        <div style={{ minHeight: "500px" }}>
          <Results
            results={animals}
            setResults={setAnimals}
            searchValue={searchValue}
            labelsArray={labelsArray}
            active={active}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "30px",
          }}
        >
          <Pagination>
            {pages?.map((page) => (
              <Pagination.Item
                key={page}
                active={page === active}
                onClick={() => setActive(page)}
              >
                {page}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      </AdminScreen>
    </div>
  );
};

export default CattleFarms;
