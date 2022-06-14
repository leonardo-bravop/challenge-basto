import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import "./Form.css";
import updateAnimal from "../services/updateAnimal";
import createAnimal from "../services/createAnimal";

const AnimalForm = ({ result, setResults, update, create, active, handleClose }) => {
  const [type, setType] = useState(result?.type || "");
  const [device, setDevice] = useState(result?.device || "");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const handleTypeCheck = (e) => {
    setType(e.target.value);
  };

  const handleDeviceCheck = (e) => {
    setDevice(e.target.value);
  };

  const onSubmit = (data) => {
    if (update) {updateAnimal(result._id, setResults, { ...data, type, device }, active).then(handleClose)}
    else if(create) {createAnimal(setResults, { ...data, type, device }, active).then(handleClose)};
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="inputAndLabel" style={{marginTop: 0}}>
        <label>ID SENASA</label>
        <input
          style={{ width: "100%" }}
          defaultValue={result?.senasaId}
          {...register("senasaId", {
            required: "ID SENASA es requerido",
            pattern: {
              value: /^([a-zA-Z0-9]){16}$/,
              message: "ID SENASA debe ser de 16 caracteres alfanumericos",
            },
          })}
          maxLength={16}
        />
        {errors.senasaId && <p>{errors.senasaId.message}</p>}
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>Tipo</div>
        <div>
          <input
            id="Novillo"
            type="radio"
            value="Novillo"
            checked={type === "Novillo"}
            onChange={handleTypeCheck}
          />
          <label htmlFor="Novillo" style={{marginLeft: "5px"}}>Novillo</label>
        </div>
        <div>
          <input
            id="Toro"
            type="radio"
            value="Toro"
            checked={type === "Toro"}
            onChange={handleTypeCheck}
          />
          <label htmlFor="Toro" style={{marginLeft: "5px"}}>Toro</label>
        </div>
        <div>
          <input
            id="Vaquillona"
            type="radio"
            value="Vaquillona"
            checked={type === "Vaquillona"}
            onChange={handleTypeCheck}
          />
          <label htmlFor="Vaquillona" style={{marginLeft: "5px"}}>Vaquillona</label>
        </div>
      </div>
      <div className="inputAndLabel">
        <label htmlFor="weight">Peso</label>
        <input
          id="weight"
          type="number"
          defaultValue={result?.weight}
          {...register("weight", {
            required: "El peso es requerido",
          })}
        />
        {errors.weight && <p>{errors.weight.message}</p>}
      </div>

      <div className="inputAndLabel">
        <label htmlFor="cattleRanch">Nombre de potrero</label>
        <input
          id="cattleRanch"
          defaultValue={result?.cattleRanch}
          {...register("cattleRanch", {
            required: "El nombre de potrero es requerido",
          })}
        />
        {errors.Potrero && <p>{errors.Potrero.message}</p>}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>Tipo de dispositivo</div>
        <div>
          <input
            id="COLLAR"
            type="radio"
            value="COLLAR"
            checked={device.toLowerCase() === "collar"}
            onChange={handleDeviceCheck}
          />
          <label htmlFor="COLLAR" style={{marginLeft: "5px"}}>COLLAR</label>
        </div>

        <div>
          <input
            id="CARAVANA"
            type="radio"
            value="CARAVANA"
            checked={device.toLowerCase() === "caravana"}
            onChange={handleDeviceCheck}
          />
          <label htmlFor="CARAVANA" style={{marginLeft: "5px"}}>CARAVANA</label>
        </div>
      </div>

      <div className="inputAndLabel">
        <label htmlFor="deviceNumber">Número de dispositivo</label>
        <input
          id="deviceNumber"
          defaultValue={result?.deviceNumber}
          {...register("deviceNumber", {
            required: "El número de dispositivo es requerido",
            pattern: {
              value: /^([a-zA-Z0-9]){8}$/,
              message:
                "El número de dispositivo debe ser de 8 caracteres alfanumericos",
            },
          })}
          maxLength={8}
        />
        {errors.deviceNumber && <p>{errors.deviceNumber.message}</p>}
      </div>
      <div style={{textAlign: "right"}}>
      <Button variant="secondary" onClick={handleClose} style={{margin: "0 10px"}}> Cancelar</Button>
      <Button type="submit" variant="success"> Aceptar</Button>
      </div>
    </form>
  );
};

export default AnimalForm;
