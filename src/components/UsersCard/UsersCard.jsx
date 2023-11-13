import { useContext, useState } from "react";
import { FormContext } from "../../contexts/FormContext/FormContext";
import LikeButton from "../LikeButton/LikeButton";
import SearchComponent from "../SearchComponent/SearchComponent";

const UsersCard = () => {
  const { usuariosCadastrados } = useContext(FormContext);
  const [searchResult, setSearchResult] = useState(null);

  const handleSearchResult = (user) => {
    setSearchResult(user);
  };

  return (
    <div>
      {searchResult ? (
        <div>
          <div className="card mx-4 mb-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{searchResult.nickname}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Idade: {searchResult.age}</li>
              <li className="list-group-item">E-mail: {searchResult.email}</li>
            </ul>
            <div className="card-body d-flex justify-content-between">
              <LikeButton />
              <a href="#" className="card-link">
                <i className="fa-solid fa-user-pen"></i>
              </a>
            </div>
          </div>
          <button onClick={() => setSearchResult(null)}>Limpar</button>
        </div>
      ) : (
        <div>
          <SearchComponent onSearchResult={handleSearchResult} />
          <h2 className="mx-3">Usuários Cadastrados</h2>
          {Object.values(usuariosCadastrados).map((usuario, index) => (
            <div key={index} className="card mx-4 mb-3" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{usuario.nickname}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Idade: {usuario.age}</li>
                <li className="list-group-item">E-mail: {usuario.email}</li>
              </ul>
              <div className="card-body d-flex justify-content-between">
                <LikeButton />
                <a href="#" className="card-link">
                  <i className="fa-solid fa-user-pen"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersCard;
