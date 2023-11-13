import { useContext } from "react";
import { FormContext } from "../../contexts/FormContext/FormContext";
import "./FormComponent.css";

const FormComponent = () => {
  const { adicionarUsuario } = useContext(FormContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const { nickname, age, email, password } = event.target;

    const usuario = {
      nickname: nickname.value,
      age: age.value,
      email: email.value,
      password: password.value,
    };

    if (isFormValid(usuario)) {
      adicionarUsuario(usuario);
      alert("Cadastrado com sucesso");
    } else {
      alert("Os campos devem ser preenchidos");
    }

    event.target.reset();
  };

  const isFormValid = (usuario) => {
    return (
      usuario.nickname.length > 0 &&
      usuario.age.length > 0 &&
      usuario.email.length > 0 &&
      usuario.password.length > 0
    );
  };

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="nickname">
        Apelido
      </label>
      <input
        type="text"
        id="nickname"
        className="form-input"
        placeholder="Digite seu Apelido"
        required
      />

      <label className="form-label" htmlFor="age">
        Idade
      </label>
      <input
        type="number"
        id="age"
        className="form-input"
        placeholder="Digite sua idade"
        required
      />

      <label className="form-label" htmlFor="email">
        E-mail
      </label>
      <input
        type="email"
        id="email"
        className="form-input"
        placeholder="Digite seu email"
        required
      />

      <label className="form-label" htmlFor="password">
        Senha
      </label>
      <input
        type="password"
        id="password"
        className="form-input"
        placeholder="Digite sua senha"
        required
      />

      <button type="submit" className="button-form button-color">
        Cadastrar
      </button>
    </form>
  );
};

export default FormComponent;
