import React from "react";
import useForm from "./hooks/useForm";

export default () => {
  const [{ values, loading }, handleChange, handleSubmit] = useForm();

  const enviarContato = () => {
    // faça o que for preciso :)
    console.log(values);
  };

  return (
    <div>
      <h1>Contato</h1>
      <form onSubmit={handleSubmit(enviarContato)}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Digite o seu nome"
        />
        <input
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="Digite o seu e-mail"
        />
        <input
          onChange={handleChange}
          type="text"
          name="message"
          placeholder="Mensagem"
        />
        <button type="submit">{loading ? "Enviando..." : "Enviar"}</button>
      </form>
    </div>
  );
};
