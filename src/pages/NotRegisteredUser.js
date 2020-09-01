import React from "react";
import Context from "../Context";
import { UserForm } from "../components/UserForm";
import { RegisterMutation } from "../container/RegisterMutation";

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {({ isAuth, activateAuth }) => {
        return (
          <>
            <RegisterMutation>
              {(register, { data, loading, error }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password };
                  const variables = { input };
                  register({ variables }).then(activateAuth);
                };

                const errorMessage =
                  error && "El usuario ya existe o hay algun problema.";

                return (
                  <UserForm
                    disabled={loading}
                    error={errorMessage}
                    title="Registrarse"
                    onSubmit={onSubmit}
                  />
                );
              }}
            </RegisterMutation>
            <UserForm onSubmit={activateAuth} title="Iniciar Sesión" />
          </>
        );
      }}
    </Context.Consumer>
  );
};
