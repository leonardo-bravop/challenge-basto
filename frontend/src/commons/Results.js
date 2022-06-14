import React from "react";
import { Table } from "react-bootstrap";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

const Results = ({ results, setResults, searchValue, labelsArray, active }) => {
  return (
    <Table bordered hover responsive>
      <thead>
        <tr>
          {labelsArray.map((label) => {
            return <th class="text-center">{label}</th>;
          })}
          <th class="text-center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {results?.map((result) => {
          return (
            <tr key={result._id}>
              <td align="center">
                <div className="celdaContent">{result.senasaId}</div>
              </td>
              <td align="center">
                <div className="celdaContent">{result.type}</div>
              </td>
              <td align="center">
                <div className="celdaContent">{result.weight}</div>
              </td>
              <td align="center">
                <div className="celdaContent">{result.cattleRanch}</div>
              </td>
              <td align="center">
                <div className="celdaContent">{result.device}</div>
              </td>
              <td align="center">
                <div className="celdaContent">{result.deviceNumber}</div>
              </td>
              <td align="center">
                <div className="celdaContent">{result.createdAt.slice(0,10)}</div>
              </td>
              <td align="center">
                <div className="celdaContent">{result.updatedAt.slice(0,10)}</div>
              </td>
              <td align="center">
                <div className="action-buttons">
                  <DeleteModal
                    setResults={setResults}
                    searchValue={searchValue}
                    _id={result._id}
                    active={active}
                  />
                  <EditModal
                    result={result}
                    setResults={setResults}
                    labelsArray={labelsArray}
                    active={active}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Results;
