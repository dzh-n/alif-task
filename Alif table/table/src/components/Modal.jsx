import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Modal.css";

function Modal({ getPersonsData }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // const [open, setOpen] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  function submitForm(data) {
    fetch(`http://localhost:3001/persons-create`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id: crypto.randomUUID(), ...data }),
    }).then(() => {
      setModalActive(false);
      reset();
      getPersonsData();
    });
  }
  return (
    <div>
      <div className="flex justify-center">
        <button
          onClick={() => setModalActive(true)}
          className="border-2 m-5 px-5 py-1 text-center hover:bg-slate-300 active:bg-slate-400 rounded-md"
        >
          Добавить
        </button>
      </div>
      <div
        onClick={() => setModalActive(false)}
        className={modalActive ? "modal modalActive" : "modal"}
      >
        {" "}
        <div
          onClick={(e) => e.stopPropagation()}
          className={modalActive ? "modalContent modalActive" : "modalContent"}
        >
          <div className="flex m-10 justify-center">
            {modalActive === true && (
              <form onSubmit={handleSubmit(submitForm)}>
                <div className="grid grid-cols-2">
                  <div className="flex flex-col m-2">
                    <label htmlFor="firstName">Имя</label>
                    <input
                      {...register("firstName", {
                        required: true,
                        minLength: 3,
                        maxLength: 10,
                      })}
                      className="my-2 outline-none border-2 p-2"
                      id="firstName"
                      type="text"
                      name="firstName"
                      placeholder="Имя"
                    />
                    {errors.firstName?.type === "required" && (
                      <p className="text-red-600 font-bold text-xs">
                        Поле "Имя" обязательно для ввода
                      </p>
                    )}
                    {errors.firstName?.type === "minLength" && (
                      <p className="text-red-600 font-bold text-xs">
                        Введите боллее двух букв
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col m-2">
                    <label htmlFor="lastName">Фамилия</label>
                    <input
                      {...register("lastName", {
                        required: true,
                        minLength: 3,
                        maxLength: 10,
                      })}
                      className="my-2 outline-none border-2 p-2"
                      id="lastName"
                      type="text"
                      name="lastName"
                      placeholder="Фамилия"
                    />
                    {errors.lastName?.type === "required" && (
                      <p className="text-red-600 font-bold text-xs">
                        Поле "Фамилия" обязательно для ввода
                      </p>
                    )}
                    {errors.lastName?.type === "minLength" && (
                      <p className="text-red-600 font-bold text-xs">
                        Введите боллее двух букв
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col m-2 ">
                    <label htmlFor="lastName">Номер телефона</label>
                    <input
                      {...register("phone", {
                        required: true,
                        pattern: /^[0-9+]*$/,
                        maxLength: 9,
                      })}
                      className="my-2 outline-none border-2 p-2"
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Номер телефона"
                    />
                    {errors.phone?.type === "required" && (
                      <p className="text-red-600 font-bold text-xs">
                        Поле "Номер телефона" обязательно для ввода
                      </p>
                    )}
                    {errors.phone?.type === "maxLength" && (
                      <p className="text-red-600 font-bold text-xs">
                        Введите девять цифр
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col m-2 ">
                    <label htmlFor="lastName">Email</label>
                    <input
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      className="my-2 outline-none border-2 p-2"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    {errors.email?.type === "required" && (
                      <p className="text-red-600 font-bold text-xs">
                        Поле "Email" обязательно для ввода
                      </p>
                    )}
                    {errors.email?.type === "pattern" && (
                      <p className="text-red-600 font-bold text-xs">
                        Email должен содержать "@"
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col m-2 ">
                    <label htmlFor="lastName">Адрес</label>
                    <input
                      {...register("address", {
                        required: true,
                        maxLength: 20,
                      })}
                      className="my-2 outline-none border-2 p-2"
                      id="address"
                      type="text"
                      name="address"
                      placeholder="Адрес"
                    />
                    {errors.address?.type === "required" && (
                      <p className="text-red-600 font-bold text-xs">
                        Поле "Адрес" обязательно для ввода
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col m-2">
                    <label htmlFor="lastName">Номер телефона</label>
                    <input
                      className="my-2 outline-none border-2 p-2"
                      id="age"
                      type="number"
                      {...register("age", { required: true, min: 18, max: 99 })}
                      name="age"
                      placeholder="Возраст"
                    />
                    {errors.age?.type === "required" && (
                      <p className="text-red-600 font-bold text-xs">
                        Поле "Возраст" обязательно для ввода
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="border-2 m-5 px-5 py-1 text-center  hover:bg-slate-300 active:bg-slate-400 rounded-md"
                  >
                    Cохранить
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
