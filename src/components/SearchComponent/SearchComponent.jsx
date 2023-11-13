import { useState, useContext } from "react";
import { FormContext } from "../../contexts/FormContext/FormContext";
import "./SearchComponent.css";

// eslint-disable-next-line react/prop-types
const SearchComponent = ({ onSearchResult }) => {
  const { usuariosCadastrados } = useContext(FormContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    const user = Object.values(usuariosCadastrados).find(
      (usuario) => usuario.nickname === searchQuery
    );

    setSearchResult(user);
    onSearchResult(user); // Passando o resultado da pesquisa para o componente pai
  };

  return (
    <div className="mx-4">
      <h2>Pesquisar Usuário</h2>
      <input
        className="mt-3 search-input"
        type="text"
        placeholder="Digite o nickname do usuário"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="mx-2 btn btn-primary" onClick={handleSearch}>
        Pesquisar
      </button>

      {searchResult && (
        <div>
          <h3>Resultado da Pesquisa</h3>
          <p>Nickname: {searchResult.nickname}</p>
          <p>Idade: {searchResult.age}</p>
          <p>E-mail: {searchResult.email}</p>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
