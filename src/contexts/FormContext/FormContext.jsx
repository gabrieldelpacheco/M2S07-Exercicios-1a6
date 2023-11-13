import { createContext, useState } from "react";

export const FormContext = createContext({
  usuariosCadastrados: {},
  adicionarUsuario: () => {},
});

// eslint-disable-next-line react/prop-types
export const FormProvider = ({ children }) => {
  const [usuariosCadastrados, setUsuariosCadastrados] = useState({});

  const adicionarUsuario = (usuario) => {
    setUsuariosCadastrados({
      ...usuariosCadastrados,
      [usuario.email]: usuario,
    });
  };

  return (
    <FormContext.Provider value={{ usuariosCadastrados, adicionarUsuario }}>
      {children}
    </FormContext.Provider>
  );
};
