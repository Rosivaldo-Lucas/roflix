import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Button } from '../../../components/Button';

const CadastroCategoria = () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [campos, setCampos] = useState(valoresIniciais);

  const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://roflix.herokuapp.com/categorias';
  useEffect(() => {
    fetch(URL)
      .then(async (resposta) => {
        const respostaJson = await resposta.json();

        setCategorias([...respostaJson]);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([
      ...categorias,
      campos,
    ]);

    setCampos(valoresIniciais);
  }

  function setValor(chave, valor) {
    setCampos({
      ...campos,
      [chave]: valor,
    });
  }

  function handleChange(e) {
    setValor(e.target.getAttribute('name'), e.target.value);
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {campos.nome}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={campos.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição da Categoria"
          type="textarea"
          name="descricao"
          value={campos.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={campos.cor}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>

      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.id}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
