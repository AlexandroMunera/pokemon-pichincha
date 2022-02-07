import React from "react";
import "./style.scss";
import { ReactComponent as SaveIcon } from "../../images/saveIcon.svg";
import { ReactComponent as CancelIcon } from "../../images/cancelIcon.svg";

export const Form = ({
  pokemonSelected,
  setPokemonSelected,
  setShowForm,
  save,
}) => {
  const handlerCancel = () => {
    setShowForm(false);
  };

  const handlerChange = (event) => {
    setPokemonSelected({
      ...pokemonSelected,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container">
      <h3>{pokemonSelected ? "Editar" : "Nuevo"} Pokemon</h3>
      <div className="details">
        <div className="data">
          <div className="input">
            <span>Nombre:</span>
            <input
              onChange={handlerChange}
              name="name"
              type="text"
              value={pokemonSelected && pokemonSelected.name}
            />
          </div>
          <div className="input">
            <span>Imagen:</span>
            <input
              onChange={handlerChange}
              name="image"
              type="text"
              value={pokemonSelected && pokemonSelected.image}
            />
          </div>
        </div>
        <div className="skills">
          <div className="input">
            <span>Ataque:</span>
            <input
              type="range"
              min="1"
              max="100"
              onChange={handlerChange}
              name="attack"
              value={pokemonSelected && pokemonSelected.attack}
            />
          </div>
          <div className="input">
            <span>Defensa:</span>
            <input
              type="range"
              min="1"
              max="100"
              onChange={handlerChange}
              name="defense"
              value={pokemonSelected && pokemonSelected.defense}
            />
          </div>
        </div>
      </div>
      <div className="buttons">
        <button onClick={() => save()}>
          <SaveIcon className="icon" /> Guardar
        </button>
        <button onClick={() => handlerCancel()}>
          <CancelIcon className="icon" /> Cancelar
        </button>
      </div>
    </div>
  );
};
