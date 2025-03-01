import React from "react";

const ErrorComponent: React.FC = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="alert alert-danger" role="alert">
        Ocorreu um erro ao carregar as tarefas.
      </div>
    </div>
  );
};

export default ErrorComponent;
