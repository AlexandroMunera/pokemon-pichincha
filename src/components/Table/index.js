import React from "react";
import "./style.scss";
import { ReactComponent as EditIcon } from "../../images/editIcon.svg";
import { ReactComponent as DeleteIcon } from "../../images/deleteIcon.svg";

export const Table = ({ data, selectedItem, setShowForm, handlerDelete }) => {
  const hadlerEdit = (item) => {
    console.log(item);
    setShowForm(true);
    selectedItem(item);
  };

  const items = data.map((item) => (
    <React.Fragment key={item.id}>
      <div>{item.name}</div>
      <div className="image">
        <img src={item.image} alt={item.name} />
      </div>
      <div>{item.attack}</div>
      <div>{item.defense}</div>
      <div className="actions">
        <EditIcon className="icon" onClick={() => hadlerEdit(item)} />
        <DeleteIcon className="icon" onClick={() => handlerDelete(item.id)} />
      </div>
    </React.Fragment>
  ));

  return (
    <div className="table">
      <div className="table__header">Nombre</div>
      <div className="table__header">Imagen</div>
      <div className="table__header">Ataque</div>
      <div className="table__header">Defensa</div>
      <div className="table__header">Acciones</div>

      {items}
    </div>
  );
};
