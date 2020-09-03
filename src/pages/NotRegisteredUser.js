import React from "react";
import Context from "../Context";
import { UserForm } from "../components/UserForm";
import { RegisterMutation } from "../container/RegisterMutation";
import { LoginMutation } from "../container/LoginMutation";

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

            <LoginMutation>
              {(login, { data, loading, error }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password };
                  const variables = { input };
                  login({ variables }).then(activateAuth);
                };

                const errorMessage =
                  error &&
                  "La contraseña no es correcta o el usuario no existe";

                return (
                  <UserForm
                    disabled={loading}
                    error={errorMessage}
                    title="Iniciar sesión"
                    onSubmit={onSubmit}
                  />
                );
              }}
            </LoginMutation>
          </>
        );
      }}
    </Context.Consumer>
  );
};
