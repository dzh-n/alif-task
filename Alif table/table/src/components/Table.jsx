import React from "react";
import { useState, useEffect } from "react";
import Modal from "./Modal";

function Table() {
  const [personsData, setPersonsData] = useState([]);

  useEffect(() => {
    getPersonsData();
  }, []);

  function getPersonsData() {
    fetch(`http://localhost:3001/persons`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setPersonsData(data));
  }

  return (
    <div className="flex justify-center flex-col mx-5 mt-10">
      <table className="table-auto ">
        <thead>
          <tr>
            <th className="border px-5 py-2">Имя</th>
            <th className="border px-5 py-2">Фамилия</th>
            <th className="border px-5 py-2">Телефон</th>
            <th className="border px-5 py-2">Email</th>
            <th className="border px-5 py-2">Адрес</th>
            <th className="border px-5 py-2">Возраст</th>
          </tr>
        </thead>
        <tbody>
          {personsData &&
            personsData.map((person) => (
              <tr key={person.id}>
                <td className="border px-5 py-2">{person.firstName}</td>
                <td className="border px-5 py-2">{person.lastName}</td>
                <td className="border px-5 py-2">{person.phone}</td>
                <td className="border px-5 py-2">{person.email}</td>
                <td className="border px-5 py-2">{person.address}</td>
                <td className="border px-5 py-2">{person.age}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Modal getPersonsData={getPersonsData} />
    </div>
  );
}

export default Table;
