import { useEffect, useState } from "react";
import "./App.scss";
import { Form } from "./components/Form";
import { SearchBar } from "./components/SearchBar";
import { Table } from "./components/Table";
import { ReactComponent as PlusIcon } from "./images/plusIcon.svg";

const BASE_URL = "https://pokemon-pichincha.herokuapp.com/pokemons/";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState(null);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const response = await fetch(BASE_URL + "?idAuthor=1");
    const jsonData = await response.json();
    setPokemons(jsonData);
  };

  const handlerNew = () => {
    setPokemonSelected(null);
    setShowForm(true);
  };

  const save = () => {
    if (pokemonSelected.id) {
      update();
    } else {
      create();
    }
  };

  const handlerSearch = async (id) => {
    if (id === "") {
      getPokemons();
    } else {
      const response = await fetch(BASE_URL + id);
      const jsonData = await response.json();
      setPokemons([jsonData]);
    }
  };

  const create = () => {
    const newPokemon = {
      name: pokemonSelected.name,
      image: pokemonSelected.image,
      attack: pokemonSelected.attack,
      defense: pokemonSelected.defense,
      hp: 50,
      idAuthor: 1,
      type: "fire",
    };

    fetch(BASE_URL + "?idAuthor=1", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    }).then(() => getPokemons());
  };

  const update = () => {
    fetch(BASE_URL + pokemonSelected.id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pokemonSelected),
    }).then(() => getPokemons());
  };

  const handlerDelete = (id) => {
    fetch(BASE_URL + id, {
      method: "DELETE",
    })
      .then((res) => res.text()) // or res.json()
      .then(() => getPokemons());
  };

  return (
    <div className="App">
      <h3 className="title">Listado de Pokemon</h3>
      <header>
        <SearchBar handlerSearch={handlerSearch} />
        <button onClick={() => handlerNew()}>
          <PlusIcon className="icon" /> Nuevo
        </button>
      </header>
      <Table
        data={pokemons}
        selectedItem={setPokemonSelected}
        setShowForm={setShowForm}
        handlerDelete={handlerDelete}
      />
      {showForm && (
        <Form
          pokemonSelected={pokemonSelected}
          setPokemonSelected={setPokemonSelected}
          setShowForm={setShowForm}
          save={save}
        />
      )}
    </div>
  );
}

export default App;
